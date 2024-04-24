import style from "./Button.module.css";

function Button (props) {
    return (
        <button 
            className={style["btn"]}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default Button;