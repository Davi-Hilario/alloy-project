import { useEffect } from "react";
import style from "./Product.module.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/buttons/Buttons";

function Product() {
	const selectedProduct = useSelector((state) => state.selectedProduct);

	useEffect(() => {
		console.log(selectedProduct);
	}, []);

	return (
		<div className={style["Product"]}>
			<Navbar />
			<div className={style["container"]}>
				<div className={style["left-col"]}>
					<img
						className={style["image"]}
						src={selectedProduct[0].image}
						alt={selectedProduct[0].name}
					/>
				</div>
				<div className={style["right-col"]}>
					<h2>{selectedProduct[0].name}</h2>
					<div className={style["content-area"]}>
						<p>{selectedProduct[0].description}</p>
						<span>
							<b>Price: </b> R${selectedProduct[0].price}
						</span>
					</div>
					<div className={style["btn-area"]}>
						<Button
							value='Buy Now'
							w
							width='100%'
							height='30%'
							fontSize='16px'
						/>
						<Button
							value='Add to Cart'
							width='100%'
							height='30%'
							fontSize='16px'
						/>
						<Button
							value='Add to Cart and Checkout'
							width='100%'
							height='30%'
							fontSize='16px'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
