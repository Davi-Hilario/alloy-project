import style from './ProductCard.module.css';
import PropTypes from 'prop-types';
import Button from '../../buttons/Buttons';
import { useDispatch } from 'react-redux';
import { toggleAddToCart } from '../../../redux/slices/productsSlice';

function ProductCard ({ id, src, title, description, price, addToCart, inCart }) {

    const dispatch = useDispatch();

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
                    <button 
                        className={style['shopping-cart-btn']}
                        onClick={()=> {
                            dispatch(toggleAddToCart({id: id, inCart: !inCart}))
                        }}
                    ></button>
                    <Button 
                        onClick={() => {console.log('Buy');}}
                        value="See more"
                    />
            </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

ProductCard.defaultProps = {
    src: "",
    title: "-",
    description: "-",
    price: 0,
}
export default ProductCard;