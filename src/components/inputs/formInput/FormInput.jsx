import style from './FormInput.module.css';

function FormInput(props) {
    return (
        <>
            <div 
                className={style["input-line"]}
                style={{
                    height: props.height
                }}
            >
                <label className={style["input-label"]}>{props.fieldName}</label>
                <input 
                    className={style["input-field"]} 
                    type="text" 
                    name={props.fieldName}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
        </>
    )
}

export default FormInput;