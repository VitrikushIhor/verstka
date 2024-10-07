import styles from './styles.module.scss';

export interface InterfaceTitle {
	text: string
	className?: string
}


export default function Title(props: InterfaceTitle) {
	const {text, className = ''} = props
	return (
		 <h2 className={`${styles.container} ${className}`}>
			 {text}
		 </h2>
	)
}
