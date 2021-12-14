import styles from '../../../../styles/screens/index/wineries/Wineries.module.css'

const Wineries = () => {
    return (
        <section className={styles.wineries_section}>
            <div className={styles.wineries_slider}>
                <div className={styles.wineries_slider_track}>
                    <div className={styles.winaries_slide}>
                        <img src="/assets/img/bodegas/1.png" alt="" />
                    </div>
                    <div className={styles.winaries_slide}>
                        <img src="/assets/img/bodegas/2.svg" alt="" />
                    </div>
                    <div className={styles.winaries_slide}>
                        <img src="/assets/img/bodegas/3.png" alt="" />
                    </div>
                    <div className={styles.winaries_slide}>
                        <img src="/assets/img/bodegas/4.svg" alt="" />
                    </div>
                    <div className={styles.winaries_slide}>
                        <img src="/assets/img/bodegas/5.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wineries;