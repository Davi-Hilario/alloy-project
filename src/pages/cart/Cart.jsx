import style from "./Cart.module.css";
import { removeItemFromCart } from "../../redux/slices/cartSlice"; 
import { toggleAddToCart } from "../../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/cards/productCard/ProductCard";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)

    return (
        <div className={style["Cart"]}>
            <Navbar />
            { cartItems.length !== 0 &&
                <div className={style["found-items-area"]}>
                    { cartItems && cartItems.map((data, index) => (
                    <div
                        key={index}
                        className={style['products-area']}
                    >
                        <ProductCard 
                            id={data.id}
                            title={data.name}
                            description={data.description}
                            price={data.price}
                            src={data.image}
                            addToCart={() => {
                                dispatch(toggleAddToCart({ id: data.id, inCart: !data.inCart }))
                                dispatch(removeItemFromCart({ id: data.id }))
                            }}
                            inCart={data.inCart}
                        />
                    </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Cart;