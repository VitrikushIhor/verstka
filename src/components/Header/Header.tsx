import styles from './styles.module.scss';
import Logo from '../Logo/Logo.tsx';
import Modal from '../Modal/Modal.tsx';
import Title from '../Title/Title.tsx';
import {useForm} from 'react-hook-form';
import Button from '../Button/Button.tsx';
import useOutside from '../../hooks/useOutside.tsx';
import {addDoc, collection, getDocs} from '@firebase/firestore';
import {fireStore} from '../../storage/storage.ts';
import Burger from '../Burger/Burger.tsx';
import HeaderAction from '../HeaderAction/HeaderAction.tsx';

export const headerLinks = [
	{title: 'Home', url: 'home'},
	{title: 'Latest posts', url: 'posts'},
	{title: 'Our Values', url: 'values'},
	{title: 'Products', url: 'products'},
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
export const handleScrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
	e.preventDefault()
	const element = document.getElementById(e.currentTarget.getAttribute('href')?.slice(1) as string)
	if (element) {
		element.scrollIntoView({behavior: 'smooth'})
	}
}
export default function Header() {
	const {register, handleSubmit} = useForm<FormValuesSingIn>();
	const {register: regLogIn, handleSubmit: handleSubmitLogIn} = useForm<FormValuesLogin>();
	const {ref, isShow, setIsShow} = useOutside(false)
	const {ref: singUpRef, isShow: singUpIsShow, setIsShow: setSingUpIsShow} = useOutside(false)
	const refData = collection(fireStore, 'users')


	async function getUsers() {
		try {
			const querySnapshot = await getDocs(collection(fireStore, 'users'));
			return querySnapshot.docs.map(doc => (doc.data()));
		} catch (error) {
			console.error('Something Went Wrong ', error);
		}
	}


	const onSubmit = async (data: FormValuesSingIn) => {
		try {
			await addDoc(refData, {
				user: data,
			})
			localStorage.setItem('user', JSON.stringify(data))
			setIsShow(false)
		} catch (e) {
			console.error(e)
			setIsShow(false)
		}
	}

	const submitLogIn = async (data: FormValuesLogin) => {
		setIsShow(false)
		if (localStorage.getItem('user')) {
			const user = JSON.parse(localStorage.getItem('user') as string)
			if (user.email === data.emailLogin && user.password === data.passwordlogin) {
				setSingUpIsShow(false)
			} else {
				console.log('User not found')
			}
		} else {
			const users = await getUsers()
			users?.forEach((user) => {
				if (user.email === data.emailLogin && user.password === data.passwordlogin) {
					setSingUpIsShow(false)
				} else {
					console.log('User not found')
				}
			})
		}
	}

	return (
			 <header className={styles.container}>
				 <Logo/>
				 <ul className={styles.linksWrapper}>
					 {headerLinks.map((link) => (
							<li key={crypto.randomUUID()}>
								<a onClick={(e) => handleScrollToProducts(e)} href={`#${link.url}`}>
									{link.title}
								</a>
							</li>
					 ))}
				 </ul>
				 <div className={styles.wrap}>

					 <HeaderAction setIsShow={setIsShow} setSingUpIsShow={setSingUpIsShow}/>
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
				 <Burger setIsShow={setIsShow} setSingUpIsShow={setSingUpIsShow}/>
			 </header>
	)
}
