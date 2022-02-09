import style from "./Sidebar.module.css";

import Link from "next/link";
import { signout } from "../../../../lib/auth";

import { useRouter } from 'next/router';

const Sidebar = ()=> {
  const router = useRouter()
  const { view } = router.query

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarWrapper}>
        <div className={style.sidebarMenu}>
          <h3 className={style.sidebarTitle}>Perfil</h3>
          <ul className={style.sidebarList}>
            <Link href="/profile/home" >
              <a className={style.link}>
                <li className={`${style.sidebarListItem} ${view === "home" &&(style.active)}`}>
                  <ion-icon name="home-outline"></ion-icon>
                  <span>Inicio</span>
                </li>
              </a>
            </Link>
            <Link href="/profile/personal-data" >
              <a className={style.link}>
                <li className={`${style.sidebarListItem} ${view === "personal-data" &&(style.active)}`}>
                  <ion-icon name="list-outline"></ion-icon>
                  <span>Datos personales</span>
                </li>
              </a>
            </Link>
            <Link href="/profile/shopping" >
              <a className={style.link}>
                <li className={`${style.sidebarListItem} ${view === "shopping" &&(style.active)}`}>
                  <ion-icon name="cart-outline"></ion-icon>
                  <span>Mis compras</span>
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={style.sidebarMenu}>
          <h3 className={style.sidebarTitle}>Configuración</h3>
          <ul className={style.sidebarList}>
            <li className={`${style.sidebarListItem} ${style.close}`} onClick={()=> signout(()=> window.location.href = "/")}>
              <ion-icon name="exit-outline"></ion-icon>
              <span>Cerrar sesión</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
