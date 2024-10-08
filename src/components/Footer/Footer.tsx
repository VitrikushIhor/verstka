import styles from './styles.module.scss';
import Logo from '../Logo/Logo.tsx';
import {handleScrollToProducts, headerLinks} from '../Header/Header.tsx';
import {Instagram} from 'lucide-react';


export default function Footer() {
	return (
		 <footer className={styles.container}>
			 <Logo/>
			 <ul className={styles.footerLinks}>
				 {headerLinks.map((link) => (
						<li key={crypto.randomUUID()}>
							<a onClick={(e) => handleScrollToProducts(e)} href={`#${link.url}`}>
								{link.title}
							</a>
						</li>
				 ))}
			 </ul>
			 <ul className={`${styles.footerIcons}`}>
				 {headerLinks.map(() => (
						<li key={crypto.randomUUID()}><Instagram/></li>
				 ))}
			 </ul>
		 </footer>
	)
}
