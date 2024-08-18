'use client';

import { login } from '@/lib/action';
import styles from './loginForm.module.css';
import { useFormState } from 'react-dom';
import Link from 'next/link';

const LoginForm = () => {
	const [state, formAction] = useFormState(login, undefined);

	return (
		<form className={styles.form} action={formAction}>
			<input type='username' name='username' placeholder='User Name' />
			<input type='password' name='password' placeholder='Password' />
			<button>Login</button>
			{state?.error}
			<Link href='/register'>
				{"Don't have an account?"} <b>Register</b>
			</Link>
		</form>
	);
};

export default LoginForm;
