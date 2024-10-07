import styles from './App.module.scss'
import Header from './components/Header/Header.tsx';
import Container from './components/Container/Container.tsx';
import MainBlog from './components/MainBlog/MainBlog.tsx';
import LatestPost from './components/LatestPost/LatestPost.tsx';
import {ourValues, posts} from './data/data.ts';
import OurValues from './components/OurValues/OurValues.tsx';
import SwiperSection from './components/SwiperSection/SwiperSection.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {

	return (
		 <div className={styles.layout}>
			 <Container>
				 <div className={styles.wrapper}>
					 <Header/>
					 <MainBlog/>
					 <LatestPost posts={posts}/>
					 <OurValues values={ourValues}/>
					 <SwiperSection/>
				 </div>
			 </Container>
			 <Footer/>
		 </div>
	)
}

export default App
