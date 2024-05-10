import style from "./Button.module.css";

function Button({
	onClick,
	width,
	height,
	fontSize,
	backgroundColor,
	disabled,
	value,
}) {
	return (
		<button
			className={style["btn"]}
			onClick={onClick}
			style={{
				width: width,
				height: height,
				fontSize: fontSize,
				backgroundColor: disabled ? "gray" : backgroundColor,
			}}
			disabled={disabled}
		>
			{value}
		</button>
	);
}

export default Button;
