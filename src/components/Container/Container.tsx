import styles from './styles.module.scss';
import {PropsWithChildren} from 'react';

type IProps = PropsWithChildren


export default function Container(props: IProps) {
	const {children} = props
	return (
		 <div className={styles.container}>
			 {children}
		 </div>
	)
}
