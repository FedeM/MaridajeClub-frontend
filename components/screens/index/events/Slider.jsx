// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination"
import styles from '../../../../styles/screens/index/events/Slider.module.css'
// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);
import Image from 'next/image'
import {isMobile} from 'react-device-detect';





const Slider = ({lives}) => {
    return (
        <>
        <Swiper 
            slidesPerView={isMobile ? (1.2):(3.1)} 
            spaceBetween={30} 
            pagination={{
                "clickable": true
            }} className={styles.swiper}
        >
        {
            lives.map((e,i)=>(
                <SwiperSlide key={i} className={`${styles.swiper_slide}`}>
                    <img 
                        src={`${e.cover}`}
                        className={styles.swiper_slide_img}
                    />
                </SwiperSlide>

            ))
        }
            
        </Swiper>
    </>
    );
};

export default Slider;


{/* <ReactPlayer
    url={'/assets/video/live.mp4'}
    width='100%'
    height='100%'
    controls
    muted
    className={styles.slider_react_player}
/> */}
