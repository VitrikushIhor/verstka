import styles from './styles.module.scss';
import LogoImage from '../../assets/logo/Logo.png'

interface IProps {
}


export default function Logo(props: IProps) {
	const {} = props
	return (
		 <div className={styles.container}>
			 <img src={LogoImage} alt="logo"/>
		 </div>
	)
}
