import styles from './styles.module.scss';
import Logo from '../Logo/Logo.tsx';
import {headerLinks} from '../Header/Header.tsx';
import {Instagram} from 'lucide-react';


export default function Footer() {
	return (
		 <footer className={styles.container}>
			 <Logo/>
			 <ul className={styles.footerLinks}>
				 {headerLinks.map((link) => (
						<li key={crypto.randomUUID()}> {link.title} </li>
				 ))}
			 </ul>
			 <ul className={styles.footerLinks}>
				 {headerLinks.map(() => (
						<li key={crypto.randomUUID()}><Instagram/></li>
				 ))}
			 </ul>
		 </footer>
	)
}
