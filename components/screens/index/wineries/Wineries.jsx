import styles from '../../../../styles/screens/index/wineries/Wineries.module.css'
import Image from 'next/image'


const Wineries = ({id}) => {
    return (
        <section className={styles.wineries_section} id={id}>
            <div className={styles.wineries_slider}>
                <div className={styles.wineries_slider_track}>
                    <div className={styles.winaries_slide}>
                        <Image src="/assets/img/bodegas/1.png" alt="" layout='fill' objectFit='contain'/>
                    </div>
                    <div className={styles.winaries_slide}>
                        <Image src="/assets/img/bodegas/2.svg" alt="" layout='fill' objectFit='contain'/>
                    </div>
                    <div className={styles.winaries_slide}>
                        <Image src="/assets/img/bodegas/3.png" alt="" layout='fill' objectFit='contain'/>
                    </div>
                    <div className={styles.winaries_slide}>
                        <Image src="/assets/img/bodegas/4.svg" alt="" layout='fill' objectFit='contain'/>
                    </div>
                    <div className={styles.winaries_slide}>
                        <Image src="/assets/img/bodegas/5.png" alt="" layout='fill' objectFit='contain'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wineries;