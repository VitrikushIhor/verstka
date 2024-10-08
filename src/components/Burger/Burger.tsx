import styles from './styles.module.scss';
import useOutside from '../../hooks/useOutside.tsx';
import {Menu, X} from 'lucide-react';
import {handleScrollToProducts, headerLinks} from '../Header/Header.tsx';
import HeaderAction from '../HeaderAction/HeaderAction.tsx';

interface IProps {
	setIsShow: (value: boolean) => void;
	setSingUpIsShow: (value: boolean) => void;
}

export default function Burger(props: IProps) {
	const {setSingUpIsShow, setIsShow: setIsShowProps} = props
	const {ref, isShow, setIsShow} = useOutside(false)
	return (
		 <div className={styles.container}>
			 <div
					ref={ref}
					className={`${styles.icons_mobile} ${isShow && styles.opened}`}
			 >
				 <button
						className={`${styles.icons_item} ${isShow ? styles.searchBarOpen : ''}`}
						onClick={() => setIsShow(!isShow)}
				 >
					 {isShow ? <X/> : <Menu/>}
				 </button>
			 </div>
			 <div
					className={`${styles.burgerMenu} ${isShow ? styles.burgerMenuOpen : ''}`}
			 >
				 {headerLinks.map((item) => (
						<a onClick={(e) => handleScrollToProducts(e)} href={`#${item.url}`} key={crypto.randomUUID()}
						   className={styles.item}>{item.title}</a>
				 ))}
				 <HeaderAction setSingUpIsShow={setSingUpIsShow} setIsShow={setIsShowProps}/>
			 </div>
		 </div>
	)
}
