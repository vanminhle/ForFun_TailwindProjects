import styles from './Link.module.css';
import NavLink from '@/components/navbar/links/navLink/navLink';

const Links = () => {
  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link =>
          // <Link href={link.path} key={link.title}>{link.title}</Link>
          <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin &&
            <NavLink item={{ title: 'Admin', path: '/Admin' }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
  );

};

export default Links;
