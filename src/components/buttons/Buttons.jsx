import style from "./Button.module.css";

function Button (props) {
    return (
        <button 
            className={style["btn"]}
            onClick={props.onClick}
            style={{
                width: props.width,
                height: props.height,
                fontSize: props.fontSize
            }}
        >
            {props.value}
        </button>
    )
}

export default Button;