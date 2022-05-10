import style from "./FeaturedInfo.module.css";

export default function FeaturedInfo({cards}) {
  return (
    <div className={style.featured}>
      {
        cards.map((e,i)=>(
          <div className={`${style.featuredItem} ${!e.enable &&(style.disable)}`} key={i}>
            <span className={style.featuredTitle}>{e.title}</span>
            <div className={style.featuredMoneyContainer}>
              <span className={style.featuredMoney}>{e.value}</span>
            </div>
            {e.icon}
          </div>
        ))
      }
    </div>
  );
}
