import style from './Form.module.css';
import FormInput from '../inputs/formInput/FormInput';
import Button from '../buttons/Buttons';

function Form (props) {
    return (
        <div className={style["Form"]} style={{height: props.formHeight}}>
            <div className={style["form-header"]}>
                <button onClick={props.goBack}></button>
                <h1>{props.title}</h1>
                <p></p>
            </div>
            <div className={style["form-body"]}>
                {props.formInput && props.formInput.map((element) => (
                    <FormInput
                        fieldName={element.props.fieldName}
                        height={element.props.height}
                        placeholder={element.props.placeholder}
                        onChange={element.props.onChange}
                    />
                ))}
            </div>
            <div className={style["form-footer"]}>
                <Button 
                    value={props.buttonValue}
                    height="3.5rem"
                    width="50%"
                    fontSize="20px"
                    onClick={props.onClickSubmit}
                />
                <p>{props.subText}<b onClick={props.changeForm} className={style["create-account"]}>{props.subTextLink}</b></p>
            </div>
        </div>
           
    );
}

export default Form;