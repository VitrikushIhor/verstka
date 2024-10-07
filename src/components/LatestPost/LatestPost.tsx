import styles from './styles.module.scss';
import Title from '../Title/Title.tsx';
import {IPost} from '../../data/data.ts';


export interface IProps {
	posts: IPost[]
}


export default function LatestPost(props: IProps) {
	const {posts} = props
	return (
		 <div className={styles.container}>
			 <Title text={'Latest posts'}/>
			 <div className={styles.postWrapper}>
				 {posts.map((post) => (
						<div key={crypto.randomUUID()} className={`${styles.post} ${post.reverse && styles.reverse}`}>
							<div className={styles.postInfo}>
								<h3>{post.title}</h3>
								<p>{post.desc}</p>
							</div>
							<div className={styles.postImage}>
								<img src={post.img} alt="post-img"/>
							</div>
						</div>
				 ))}
			 </div>
		 </div>
	)
}
