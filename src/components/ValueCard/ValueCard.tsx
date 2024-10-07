import styles from './styles.module.scss';
import {IValue} from '../../data/data.ts';
import Button from '../Button/Button.tsx';

export interface IProps {
	value: IValue
}


export default function ValueCard(props: IProps) {
	const {value} = props
	return (
		 <div className={styles.container}>
			 <div className={styles.content}>
				 <div className={styles.wrapper}>
					 <span>{value.title}</span>
					 <img src={value.img} alt={value.title}/>
					 <p>{value.desc}</p>
					 <Button>View more</Button>
				 </div>
			 </div>
		 </div>
	)
}
