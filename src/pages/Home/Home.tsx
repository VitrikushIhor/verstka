import styles from './styles.module.scss';
import Header from '../../components/Header/Header.tsx';
import MainBlog from '../../components/MainBlog/MainBlog.tsx';
import LatestPost from '../../components/LatestPost/LatestPost.tsx';
import {ourValues, posts} from '../../data/data.ts';
import OurValues from '../../components/OurValues/OurValues.tsx';
import SwiperSection from '../../components/SwiperSection/SwiperSection.tsx';
import Footer from '../../components/Footer/Footer.tsx';


export default function Home() {
	return (
		 <div className={styles.layout}>
			 <div className={styles.wrapper}>
				 <div className={styles.firstWrapper}>
					 <Header/>
					 <MainBlog/>
				 </div>
				 <LatestPost posts={posts}/>
				 <div className={styles.secondWrapper}>
					 <OurValues values={ourValues}/>
				 </div>
				 <SwiperSection/>
			 </div>
			 <Footer/>
		 </div>
	)
}
