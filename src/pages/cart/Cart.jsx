import style from "./Cart.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import doesTokenExists from "../../validateAuthentication";
import { removeItemFromCart } from "../../redux/slices/cartSlice";
import { toggleAddToCart } from "../../redux/slices/productsSlice";
import CartItemCard from "../../components/cards/cartItemsCard/CartItemCard";
import { pickSelectedProduct } from "../../redux/slices/selectedProductSlice";

function Cart() {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);

	let [isLogged, setLogged] = useState(false);
	let [totalValue, setTotalValue] = useState(0);

	const navigate = useNavigate();

	useEffect(() => {
		!doesTokenExists() ? sendToLoginPage() : setLogged(doesTokenExists());
		setTotalValue(getTotalValue());
	}, []);

	useEffect(() => {
		setTotalValue(getTotalValue());
	}, [cartItems]);

	function getTotalValue() {
		let total = 0;
		cartItems.forEach((element) => {
			total += element.price;
			console.log(total);
		});
		console.log(total);
		return total;
	}

	function sendToLoginPage() {
		alert("You must log-in before adding products to your cart!");
		navigate("/login");
	}

	return (
		<div className={style["Cart"]}>
			<Navbar />
			<div className={style["container"]}>
				<div className={style["title-area"]}>
					<h1>Shopping Cart</h1>
					<div className={style["line-items"]}>
						<div className={style["cart-information"]}>
							<div className={style["information-section"]}>
								<span>Amount of items in Cart: </span>
								<b>{cartItems.length}</b>
							</div>
							<div className={style["information-section"]}>
								<span>Total:</span>
								<b>R${totalValue.toFixed(2)}</b>
							</div>
						</div>
						<div className={style["button-area"]}>
							<Button value='Checkout' />
							<Button value='Clear cart' backgroundColor='red' />
						</div>
					</div>
				</div>
				{cartItems.length === 0 && (
					<div className={style["message-area"]}>
						<span>Your cart has no products yet!</span>
						<Button
							onClick={() => navigate("/")}
							value='Go Shopping!'
							width='30%'
							height='4rem'
						/>
					</div>
				)}
				{cartItems.length !== 0 && (
					<div className={style["found-items-area"]}>
						{cartItems &&
							cartItems.map((data, index) => (
								<div key={index} className={style["products-area"]}>
									<CartItemCard
										id={data.id}
										title={data.name}
										description={data.description}
										price={data.price}
										src={data.image}
										addToCart={() => {
											dispatch(
												toggleAddToCart({ id: data.id, inCart: !data.inCart })
											);
											dispatch(removeItemFromCart({ id: data.id }));
										}}
										inCart={data.inCart}
										selectProduct={() => dispatch(pickSelectedProduct(data))}
									/>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;
