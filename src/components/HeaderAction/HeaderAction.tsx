import styles from './styles.module.scss';
import AuthedUser from '../AuthedUser/AuthedUser.tsx';

interface IProps {
	setIsShow: (value: boolean) => void;
	setSingUpIsShow: (value: boolean) => void;
}


export default function HeaderAction(props: IProps) {
	const {setSingUpIsShow, setIsShow} = props
	const user = localStorage.getItem('user')
	return (
		 <div className={styles.actions}>
			 {user ? <AuthedUser/> :
					(<div className={styles.auth}>
							 <a href="#" onClick={() => setIsShow(true)}>Sing In</a>
							 <div className={styles.line}></div>
							 <a href="#" onClick={() => setSingUpIsShow(true)}>Log In</a>
						 </div>
					)
			 }
		 </div>
	)
}
