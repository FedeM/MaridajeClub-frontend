import styles from '../../../../styles/layout/nav/NavDesktop.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'


const NavDesktop = ({logo}) => {

    
    const selectMenuItem = (e) =>{
        const marker = document.querySelector("#marker")

        marker.style.left = e.offsetLeft+"px";
        marker.style.width = e.offsetWidth+"px";
    }

    

    return (
        <div className={styles.navDesktop_container}>
            <div className={styles.navDesktop_logo_container}>
                <img
                    src={logo}
                    className={styles.navDesktop_logo}
                    alt={"logo de maridaje club"}
                />
            </div>
            <nav className={styles.navDesktop_nav}>
                <ul>
                    <div className={styles.navDesktop_nav_marker} id="marker"></div>
                    <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="home"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Inicio</LinkScroll>
                    <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="events"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Eventos</LinkScroll>
                    <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="commerce"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Nosotros</LinkScroll>
                    <LinkScroll className={`${styles.navDesktop_nav_li} li non_select`} to="home"  spy={true} onClick={(e)=> selectMenuItem(e.target)}>Ingresar</LinkScroll>
                </ul>
            </nav>
        </div>
    );
};

export default NavDesktop;