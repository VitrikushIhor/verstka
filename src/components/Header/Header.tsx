import styles from './styles.module.scss';
import Logo from '../Logo/Logo.tsx';
import Modal from '../Modal/Modal.tsx';
import Title from '../Title/Title.tsx';
import {useForm} from 'react-hook-form';
import Button from '../Button/Button.tsx';
import useOutside from '../../hooks/useOutside.tsx';

export const headerLinks = [
	{title: 'Home', url: '/'},
	{title: 'Success Stories', url: '/'},
	{title: 'Services', url: '/'},
	{title: 'Blog', url: '/'},
	{title: 'About us', url: '/'},
	{title: 'Career', url: '/'},
]
type FormValuesSingIn = {
	fullName: string;
	email: string;
	password: string;
	phone: string;
};
type FormValuesLogin = {
	emailLogin: string;
	passwordlogin: string;
};
export default function Header() {
	const {register, handleSubmit} = useForm<FormValuesSingIn>();
	const {register: regLogIn, handleSubmit: handleSubmitLogIn} = useForm<FormValuesLogin>();
	const {ref, isShow, setIsShow} = useOutside(false)
	const {ref: singUpRef, isShow: singUpIsShow, setIsShow: setSingUpIsShow} = useOutside(false)

	const onSubmit = (data: FormValuesSingIn) => {
		console.log(data);
		setIsShow(false)
	}
	const submitLogIn = (data: FormValuesLogin) => {
		console.log(data);
		setIsShow(false)
	}
	return (
		 <header className={styles.container}>
			 <Logo/>
			 <ul className={styles.linksWrapper}>
				 {headerLinks.map((link) => (
						<li key={crypto.randomUUID()}>
							<a href="#">
								{link.title}
							</a>
						</li>
				 ))}
			 </ul>
			 <div className={styles.actions}>
				 <div className={styles.auth}>
					 <a href="#" onClick={() => setIsShow(true)}>Sing In</a>
					 <div className={styles.line}></div>
					 <a href="#" onClick={() => setSingUpIsShow(true)}>Log In</a>
				 </div>
			 </div>
			 {isShow && <Modal setIsShow={setIsShow}>
				 <div ref={ref} className={styles.login}>
					 <Title className={styles.center} text={'Sign In'}/>
					 <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						 <div className={styles.inputWrapper}>
							 <span>Full Name</span>
							 <input placeholder={'Name Surname'} type={'text'} defaultValue="" {...register('fullName')} />
						 </div>
						 <div className={styles.inputWrapper}>
							 <span>Your Email</span>
							 <input placeholder={'Name Surname'} type={'email'} defaultValue="" {...register('email')} />
						 </div>
						 <div className={styles.inputWrapper}>
							 <span>Password</span>
							 <input placeholder={'Password'} type={'password'} defaultValue="" {...register('password')} />
						 </div>
						 <div className={styles.inputWrapper}>
							 <span>Your Phone </span>
							 <input placeholder={'Phone'} type={'text'} defaultValue="" {...register('phone')} />
						 </div>
						 <Button className={styles.btn} type={'submit'}>Sign In</Button>
					 </form>
					 <div className={styles.other}>
						 <span>Already have an account?</span>
						 <a href="#" onClick={() => setSingUpIsShow(true)}>Log In</a>
					 </div>
				 </div>
			 </Modal>}
			 {singUpIsShow && <Modal setIsShow={setSingUpIsShow}>
				 <div ref={singUpRef} className={styles.login}>
					 <Title className={styles.center} text={'Log In'}/>
					 <form className={styles.form} onSubmit={handleSubmitLogIn(submitLogIn)}>
						 <div className={styles.inputWrapper}>
							 <span>Your Email</span>
							 <input placeholder={'Mail'} type={'email'} defaultValue="" {...regLogIn('emailLogin')} />
						 </div>
						 <div className={styles.inputWrapper}>
							 <span>Password</span>
							 <input placeholder={'password'} type={'password'} defaultValue="" {...regLogIn('passwordlogin')} />
						 </div>
						 <Button className={styles.btn} type={'submit'}>Log In</Button>
					 </form>
					 <div className={styles.other}>
						 <span>Don`t have an account?</span>
						 <a href="#" onClick={() => setIsShow(true)}>Sign Up</a>
					 </div>
				 </div>
			 </Modal>}
		 </header>
	)
}
