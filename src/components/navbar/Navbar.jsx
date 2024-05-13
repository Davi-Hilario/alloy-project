import style from "./Navbar.module.css";
import Button from "../buttons/Buttons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doesTokenExists from "../../validateAuthentication";

function Navbar() {
	const navigate = useNavigate();
	const allProducts = useSelector((state) => state.products);

	let [cart, setCartItems] = useState([]);
	let [isLogged, setLogged] = useState(false);

	useEffect(() => {
		setLogged(doesTokenExists());
	}, []);

	useEffect(() => {
		let foundItems = allProducts.filter((item) => item.inCart);
		setCartItems(foundItems);
	}, [allProducts]);

	let login = () => {
		navigate("/login");
		window.location.reload();
	};

	let leave = () => {
		sessionStorage.clear();
		setLogged(false);
		alert("Bye ;)");
	};

	let register = () => {
		navigate("/register");
	};

	let cartIcon = () => {
		navigate("/cart");
	};

	let home = () => {
		navigate("/");
	};

	return (
		<div className={style["navbar"]}>
			<div className={style["container"]}>
				<span className={style["logo"]} onClick={home}>
					Alloy
				</span>
				<div className={style["btn-area"]}>
					{!isLogged && (
						<>
							<Button value={"Login"} onClick={login} />
							<Button value={"Register"} onClick={register} />
						</>
					)}
					{isLogged && (
						<>
							<div className={style["cart-button-area"]}>
								<button
									className={style["shopping-cart-btn"]}
									onClick={cartIcon}
								></button>
								<span>{cart.length}</span>
							</div>

							<Button value={"Leave"} onClick={leave} />
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
