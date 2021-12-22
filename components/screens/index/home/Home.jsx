import styles from '../../../../styles/screens/index/home/Home.module.css'
import { useEffect, useState } from 'react';
import Live from '../events/Live'
import Slider from '../events/Slider'

const Home = ({id}) => {
    
    useEffect(()=>{
    })

    return(
        <section id={id} className={styles.home_section}>
            <div className={styles.live_title}>
                <i className="fas fa-circle"></i>
                <h2>Live session</h2>
            </div>
            <div className={styles.live_container}>
                <Live/>
                <Slider/>
            </div>
        </section>
    );
};

export default Home;