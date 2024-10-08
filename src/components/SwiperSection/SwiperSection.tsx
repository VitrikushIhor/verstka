import styles from './styles.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useRef, useState} from 'react';
import {Swiper as SwiperClass} from 'swiper'
import {Navigation, Pagination, Thumbs} from 'swiper/modules';
import {MoveRight} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import img from '../../assets/ourValues/second.png';
import Container from '../Container/Container.tsx';


export default function SwiperSection() {
	const [thumbsSwiper] = useState<SwiperClass | null>(null);
	const swiperRef = useRef<SwiperClass | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev();
		}
	};
	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	return (
		 <Container>
			 <div id={'products'} className={styles.container}>
				 <div className={styles.swiperContainer}>
					 <Swiper
							onSwiper={(swiper) => {
								swiperRef.current = swiper;
							}}
							loop={true}
							navigation={false}
							thumbs={{swiper: thumbsSwiper}}
							modules={[Navigation, Thumbs, Pagination]}
							className={styles.mySwiper2}
							spaceBetween={25}
							centeredSlides={false}
							slidesPerView={1.5}
							pagination={{
								clickable: true,
								bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
								bulletClass: `${styles.swiperPaginationBullet}`,
								horizontalClass: `${styles.horizontalClass}`,
							}}

					 >
						 <SwiperSlide className={styles.swiperSlide}>
							 <span>Printify Blog</span>
							 <img src={img} alt=""/>
							 <a href={'#'}>See more</a>
						 </SwiperSlide>
						 <SwiperSlide className={styles.swiperSlide}>
							 <span>Printify Blog</span>
							 <img src={img} alt=""/>
							 <a href={'#'}>See more</a>
						 </SwiperSlide> <SwiperSlide className={styles.swiperSlide}>
						 <span>Printify Blog</span>
						 <img src={img} alt=""/>
						 <a href={'#'}>See more</a>
					 </SwiperSlide> <SwiperSlide className={styles.swiperSlide}>
						 <span>Printify Blog</span>
						 <img src={img} alt=""/>
						 <a href={'#'}>See more</a>
					 </SwiperSlide>
					 </Swiper>
				 </div>
				 <button
						onClick={handleNext}
						className={`${styles.button} ${styles.buttonRight}`}
				 >
					 <MoveRight className={` ${styles.svg}`}/>
				 </button>
				 <button
						onClick={handlePrev}
						className={` ${styles.button}`}
				 >
					 <MoveRight className={`${styles.iconRotate} ${styles.svg}`}/>

				 </button>
			 </div>
		 </Container>
	)
}
