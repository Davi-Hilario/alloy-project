import { useDispatch } from 'react-redux';
import Button from '../../buttons/Buttons';
import { useState, useEffect } from 'react';
import style from './CartItemCard.module.css';
import { useNavigate } from 'react-router-dom';
import doesTokenExists from '../../../validateAuthentication';

function CartItemCard ({ src, title, description, price, addToCart, inCart, selectProduct }) {

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
        <div 
            className={style["card"]} 
            onClick={() => {
                selectProduct()
                navigate("/product")
            }}
        >
            <div className={style["container"]}>
                <img className={style["card-image"]} src={src} alt={title} />
                <div className={style["title-area"]}>
                    <b>Product</b>
                    <span>{title}</span>
                </div>
                <div className={style["description-area"]}>
                    <b>Description</b>
                    <span>{description}</span>
                </div>
                <div className={style["price-area"]}>
                    <b>Price (R$)</b>
                    <span>R${price}</span>
                </div>
                <div className={style["btn-area"]}>
                    <Button 
                        onClick={addToCart}
                        value="Remove"
                        backgroundColor="red"
                    />
                </div>
            </div>
        </div>
    );
}

export default CartItemCard;