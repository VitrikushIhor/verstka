import styles from './styles.module.scss';
import Title from '../Title/Title.tsx';
import {IValue} from '../../data/data.ts';
import ValueCard from '../ValueCard/ValueCard.tsx';

export interface IProps {
	values: IValue[]
}


export default function OurValues(props: IProps) {
	const {values} = props
	return (
		 <section className={styles.container}>
			 <Title text={'Our values'}/>
			 <div className={styles.valuesContainer}>
				 {values.map((item) => (
						<ValueCard key={crypto.randomUUID()} value={item}/>
				 ))}
			 </div>
		 </section>
	)
}
