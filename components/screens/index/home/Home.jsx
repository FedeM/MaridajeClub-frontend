import styles from '../../../../styles/screens/index/home/Home.module.css'
import { useEffect, useState } from 'react';
import LiveResponsive from '../events/Responsive/LiveResponsive'
import SliderResponsive from '../events/Responsive/SliderResponsive'
import LiveDesktop from '../events/Desktop/LiveDesktop'
import SliderDesktop from '../events/Desktop/SliderDesktop'
import { BrowserView, MobileView} from 'react-device-detect';

const Home = ({id}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[mounted])

    return mounted &&(
        <section id={id} className={styles.home_section}>
            <div className={styles.live_title}>
                <i className="fas fa-circle"></i>
                <h2>Live session</h2>
            </div>
            <div className={styles.live_container}>
                <BrowserView>
                    <LiveDesktop/>
                    <SliderDesktop/>
                </BrowserView>
                <MobileView>
                    <LiveResponsive/>
                    <SliderResponsive/>
                </MobileView>
            </div>
        </section>
    );
};

export default Home;