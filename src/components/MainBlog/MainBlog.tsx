import styles from './styles.module.scss';
import mainBlog from '../../assets/mainBlog/mainBlog.png'


export default function MainBlog() {
	return (
		 <section className={styles.container}>
			 <div className={styles.textWrapper}>
				 <span className={styles.title}>Xceed Blog</span>
				 <p className={styles.text}>10 Web Design Mistakes and How to Avoid Them</p>
				 <p className={styles.desc}>Looking for more daily inspiration? Download Muzli extension — your go-to source for
					 discovering design ideas from world’s top creators!</p>
				 <span className={styles.other}>13.06, 2024 · 2:15 PM · medium.muz.li</span>
			 </div>
			 <div className={styles.imageWrapper}>
				 <img src={mainBlog} alt="blog-image"/>
			 </div>
		 </section>
	)
}
