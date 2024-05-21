import api from "../../api/api";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/searchbar/SearchBar";
import ProductCard from "../../components/cards/productCard/ProductCard";
import { pickSelectedProduct } from "../../redux/slices/selectedProductSlice";
import {
	addAllProducts,
	toggleAddToCart,
	removeAllProducts,
	addItemToCart,
	removeItemFromCart,
} from "../../redux/slices/productsSlice";
import { all } from "axios";

function Home() {
	const dispatch = useDispatch();
	const allProducts = useSelector((state) => state.products);

	let [searchValue, setSearchValue] = useState("");
	let [foundProducts, setFoundProducts] = useState([]);

	useEffect(() => {
		const findAllProducts = () => {
			api
				.get("/products")
				.then((response) => {
					const { data } = response;
					console.log(allProducts);
					data.forEach((item) => {
						dispatch(addAllProducts(item));
					});
					dispatch(removeAllProducts(data));
				})
				.catch((error) => {
					console.warn("Error: " + error);
				});
		};
		findAllProducts();
	}, []);

	useEffect(() => {
		const searchProduct = () => {
			if (searchValue !== "") {
				let searchResult = [];

				for (var i = 0; i < allProducts.length; i++) {
					if (
						allProducts[i].name
							.toUpperCase()
							.includes(searchValue.toUpperCase())
					) {
						searchResult.push(allProducts[i]);
					}
				}
				setFoundProducts(searchResult);
			} else {
				setFoundProducts([]);
			}
		};
		searchProduct();
	}, [searchValue, allProducts]);

	return (
		<div className={style["Home"]}>
			<Navbar />
			<div className={style["container"]}>
				<main>
					<div className={style["banner"]}>
						<div className={style["container"]}>
							<div className={style["banner-content"]}>
								<h1>ALLOY</h1>
								<p>
									Delivering high quality and trustful products to our clients
									since 2024
								</p>
								<SearchBar
									height='15%'
									width='40%'
									onChange={(e) => setSearchValue(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</main>
				<div className={style["line"]}></div>
				{foundProducts.length !== 0 && (
					<div className={style["found-items-area"]}>
						{foundProducts &&
							foundProducts.map((data, index) => (
								<div key={index} className={style["products-area"]}>
									<ProductCard
										id={data.id}
										title={data.name}
										description={data.description}
										price={data.price}
										src={data.image}
										addToCart={() => {
											dispatch(
												toggleAddToCart({ id: data.id, inCart: !data.inCart })
											);

											if (!data.inCart) {
												dispatch(addItemToCart(data));
											} else {
												dispatch(removeItemFromCart({ id: data.id }));
											}
										}}
										inCart={data.inCart}
										selectProduct={() => {
											dispatch(pickSelectedProduct(data));
										}}
									/>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;
