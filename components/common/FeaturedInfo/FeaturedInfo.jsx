import style from "./FeaturedInfo.module.css";

export default function FeaturedInfo() {
  return (
    <div className={style.featured}>
      <div className={style.featuredItem}>
        <span className={style.featuredTitle}>Artículos en carrito</span>
        <div className={style.featuredMoneyContainer}>
          <span className={style.featuredMoney}>15</span>
        </div>
        <ion-icon name="cart-outline"></ion-icon>
      </div>
      <div className={style.featuredItem}>
        <span className={style.featuredTitle}>Compras realizadas</span>
        <div className={style.featuredMoneyContainer}>
          <span className={style.featuredMoney}>5</span>
        </div>
        <ion-icon name="bag-check-outline"></ion-icon>
      </div>
      <div className={style.featuredItem}>
        <span className={style.featuredTitle}>Eventos vistos</span>
        <div className={style.featuredMoneyContainer}>
          <span className={style.featuredMoney}>12</span>
        </div>
        <ion-icon name="videocam-outline"></ion-icon>
      </div>
    </div>
  );
}
