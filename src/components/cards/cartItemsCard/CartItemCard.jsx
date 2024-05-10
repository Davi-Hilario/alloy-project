import { useState, useEffect } from "react";
import style from "./CartItemCard.module.css";
import { useNavigate } from "react-router-dom";
import doesTokenExists from "../../../validateAuthentication";

function CartItemCard({
	id,
	src,
	title,
	description,
	price,
	isChecked,
	onClick,
}) {
	let [isLogged, setLogged] = useState(false);
	let [checked, setChecked] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		setLogged(doesTokenExists());
	}, []);

	function sendToLoginPage() {
		alert("You must log-in before adding products to your cart!");
		navigate("/login");
	}

	return (
		<div className={style["card"]} onClick={onClick}>
			<div className={style["container"]}>
				<div className={style["btn-area"]}>
					<input
						type='checkbox'
						checked={isChecked}
						name={"product" + id}
						id={"product" + id}
					/>
				</div>
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
			</div>
		</div>
	);
}

export default CartItemCard;
