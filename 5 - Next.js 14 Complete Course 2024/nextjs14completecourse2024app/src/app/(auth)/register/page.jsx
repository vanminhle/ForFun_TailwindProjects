import { register } from '@/lib/action';
import styles from './register.module.css';

const RegisterPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form className={styles.form} action={register}>
					<input type='text' name='username' placeholder='Username' />
					<input type='email' name='email' placeholder='Email' />
					<input type='text' name='password' placeholder='Password' />
					<input type='password' name='passwordRepeat' placeholder='Confirm password' />
					<button>Register</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
