import styles from './styles.module.scss';
import {ButtonHTMLAttributes, ReactNode} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
}

export default function Button(props: IProps) {
	const {className = '', children, ...rest} = props
	return (
		 <button className={`${styles.container} ${className}`}{...rest}>
			 {children}
		 </button>
	)
}
