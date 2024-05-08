import style from './ProductCard.module.css';
import Button from '../../buttons/Buttons';
import doesTokenExists from '../../../validateAuthentication';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductCard ({ src, title, description, price, addToCart, inCart, selectProduct }) {

    let [isLogged, setLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLogged(doesTokenExists());
    }, [])

    function sendToLoginPage() {
        alert("You must log-in before adding products to your cart!")
        navigate("/login")
    }

    return (
        <div className={style["card"]}>
            <div className={style["container"]}>
                <div className={style["card-image-area"]}>
                    <img src={src} alt={title} className={style['card-image']}/>
                </div>
                <h2 className={style['card-title']}>{title}</h2>
                <p className={style['card-desc']}>{description}</p>
                <div className={style["price-line"]}>
                    <div className={style["price"]}><h4>Price: </h4><p>${price}</p></div>
                    <span style={{display: inCart ? "block" : "none"}}>Added to Cart</span>
                </div>
                <div className={style["btn-area"]}>
                    { !inCart && 
                        <button 
                            className={style['shopping-cart-btn']}
                            onClick={() => isLogged ? addToCart() : sendToLoginPage()}
                        ></button>
                    }
                    { inCart && 
                       <Button 
                            onClick={addToCart}
                            value="Remove"
                            backgroundColor="red"
                        />
                    }
                    <Button 
                        onClick={() => {
                            selectProduct()
                            navigate("/product")
                        }}
                        value="See more"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;