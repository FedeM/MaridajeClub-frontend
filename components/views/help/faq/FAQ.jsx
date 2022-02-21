import style from './FAQ.module.css'

const FAQ = () => {

    const selectFaq=(e)=>{
        if (e.target.lastChild.classList.contains('fa-chevron-right')) {
            e.target.lastChild.classList.replace('fa-chevron-right', 'fa-chevron-down')
        }else{
            e.target.lastChild.classList.replace('fa-chevron-down', 'fa-chevron-right')
        }

        e.target.nextSibling.classList.toggle(`${style.active}`)
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h4>¿En qué podemos ayudarte?</h4>
            </div>
            <div className={style.card_container}>
                <div className={style.card}>
                    <div className={style.cardFront} onClick={(e)=>selectFaq(e)}>
                        <h2>Live Streaming Shopping</h2>
                        <i className="fas fa-chevron-right" aria-hidden></i>
                    </div>
                    <div className={style.cardText}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore expedita a deleniti eaque, unde consequatur. Temporibus fugiat perferendis quo deleniti repellat corporis ex eligendi quam? Libero officiis quisquam atque hic.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.cardFront} onClick={(e)=>selectFaq(e)}>
                        <h2>Comprar</h2>
                        <i className="fas fa-chevron-right" aria-hidden></i>
                    </div>
                    <div className={style.cardText}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsa vel sequi doloremque eius quae cumque numquam pariatur neque libero eos, eum recusandae quia, harum autem iusto. Quia, reiciendis iste?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;