'use client';

import { register } from '@/lib/action';
import { useRouter } from 'next/navigation';
import styles from './registerForm.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import Link from 'next/link';

const RegisterForm = () => {
	const [state, formAction] = useFormState(register, undefined);

	const router = useRouter();

	useEffect(() => {
		state?.success && router.push('/login');
	}, [state?.success, router]);

	return (
		<form className={styles.form} action={formAction}>
			<input type='text' name='username' placeholder='Username' />
			<input type='email' name='email' placeholder='Email' />
			<input type='password' name='password' placeholder='Password' />
			<input type='password' name='passwordRepeat' placeholder='Confirm password' />
			<button>Register</button>
			{state?.error}
			<Link href='/login'>
				Have an account? <b>Login</b>
			</Link>
		</form>
	);
};

export default RegisterForm;
