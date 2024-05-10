import search from "../../utils/assets/icons/search.png";
import style from "./SearchBar.module.css";

function SearchBar(props) {
	return (
		<>
			<div
				className={style["search-bar"]}
				style={{
					backgroundColor: props.color,
					height: props.height,
					width: props.width,
					borderRadius: props.borderRadius,
				}}
			>
				<div
					className={style["icon-area"]}
					style={{
						borderRadius: props.borderRadius,
					}}
				>
					<img src={search} alt='search' className={style["icon"]} />
				</div>
				<input
					type='text'
					placeholder='Type a product name here'
					className={style["search-input"]}
					style={{
						borderRadius: props.borderRadius,
					}}
					onChange={props.onChange}
				/>
			</div>
		</>
	);
}

export default SearchBar;
