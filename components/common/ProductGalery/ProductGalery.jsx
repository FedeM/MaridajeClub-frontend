import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import {ProductCard} from '../';
import CartContext from '../../../context/cartContext';
import styles from './ProductGalery.module.css'
import Router from 'next/router';



const ProductGalery = ({title, home,activeTitle, products, justifyContent}) => {
    const {setShowAlert,showAlert} = useContext(CartContext)
    
    return (
        <div className={styles.product_section}>
        {
            activeTitle && (
                <div className={styles.product_section_title}>
                    <h4>{title}</h4>
                </div>
            )
        }
        {
            showAlert && !home  &&(
                <Alert variant="success" style={{width: "100%"}}>
                    <Alert.Heading>Agregaste a tu carrito!</Alert.Heading>
                        <p>
                            Para seguir comprando revisa todos nuestros productos
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                        <Button variant="success" onClick={()=> Router.push('/cart')}>
                            Revisar carrito
                        </Button>
                        <Button variant="outline-success" className='ms-2' onClick={()=> setShowAlert(false)}>
                            De acuerdo
                        </Button>
                    </div>
                </Alert>
            )
        }
            <div className={styles.product_container} style={{justifyContent: justifyContent}}>
                {
                    products.length > 0 ? (
                        products.map((e,i)=>(
                            <ProductCard
                                key={i}
                                product={e}
                            />
                        ))
                    ):(
                        <div className={styles.empty_shopping}>
                            <h4>Ups! No hay resultados para esta búsqueda</h4>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductGalery;
