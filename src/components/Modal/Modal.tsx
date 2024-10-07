import styles from './styles.module.scss';
import {ReactNode} from 'react';
import {CircleX} from 'lucide-react';

export interface InterfaceModal {
	children?: ReactNode
	setIsShow: (isShow: boolean) => void

}

export default function Modal(props: InterfaceModal) {
	const {children, setIsShow} = props
	return (
		 <div className={styles.container}>
			 <div className={styles.wrapper}>
				 <div className={styles.img}>
					 <CircleX onClick={() => {
						 setIsShow(false)
					 }}/>
				 </div>
				 <div>
					 {children}
				 </div>
			 </div>
		 </div>
	)
}

