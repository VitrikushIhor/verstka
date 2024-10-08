import styles from './styles.module.scss';
import image from '../../assets/indus.png';


export default function AuthedUser() {
	const user = JSON.parse(localStorage.getItem('user') || '')
	console.log(user)
	return (
		 <div className={styles.container}>
			 <img src={image} alt="user"/>
			 <span>{user?.fullName}</span>
		 </div>
	)
}
