import { handleGithubLogin, login } from '@/lib/action';

const LoginPage = async () => {
	return (
		<div>
			<form action={handleGithubLogin}>
				<button>Login With GitHub</button>
			</form>
			<form action={login}>
				<input type='text' name='username' placeholder='username' />
				<input type='password' name='password' placeholder='password' />
				<button>Login with Credentials</button>
			</form>
		</div>
	);
};
export default LoginPage;
