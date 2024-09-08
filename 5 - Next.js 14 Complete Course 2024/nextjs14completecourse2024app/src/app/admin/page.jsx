import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUsers from '@/components/AdminUsers/adminUsers';
import AdminUserForm from '@/components/AdminUserForm/adminUserForm';
import { auth } from '@/lib/auth';

const AdminPage = async () => {
	const session = await auth();

	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminPosts />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminPostForm userId={session?.user.id} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminUsers />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminUserForm userId={session?.user.id} />
				</div>
			</div>
		</div>
	);
};
export default AdminPage;
