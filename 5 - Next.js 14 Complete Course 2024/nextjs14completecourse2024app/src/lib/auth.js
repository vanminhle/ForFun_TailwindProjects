import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDb } from './utils';
import { User } from './models';
import bcrypt from 'bcryptjs';

const login = async (credentials) => {
	try {
		connectToDb();
		const user = await User.findOne({ username: credentials.username });

		if (!user) {
			throw new Error('Wrong credentials!');
		}

		const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

		if (!isPasswordCorrect) {
			throw new Error('Wrong credentials!');
		}

		return user;
	} catch (err) {
		throw new Error('Failed to Login!');
	}
};

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		GitHub({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			// console.log(user, account, profile);
			if (account.provider === 'github') {
				connectToDb();
				try {
					const user = await User.findOne({ email: profile.email });
					if (!user) {
						const newUser = new User({
							email: profile.email,
							username: profile.name,
							image: profile.avatar_url,
						});

						await newUser.save();
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			}
			return true;
		},
	},
});
