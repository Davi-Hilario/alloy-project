import style from './Register.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersController as api } from '../../api/api';
import Form from '../../components/form/Form';
import FormInput from '../../components/inputs/formInput/FormInput';

function Register() {

    let [loginValue, setLoginValue] = useState("");
    let [passwordValue, setPasswordValue] = useState("");
    let [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const navigate = useNavigate();

    function handleSubmit () {
        if (passwordValue !== confirmPasswordValue) {
            console.warn("Password and Confirm Password are not identical!");
        } else {
            api.post(null, {
                email: loginValue,
                password: passwordValue
            }).then(response => {
                alert("Account Created!")
                navigate("/login");
            }).catch(err => {
                alert("Unable to create the account: " + err)
            })
        }
    }

    return (
        <div className={style["Register"]}>
            <div className={style["container"]}>
                <Form
                    title="REGISTER"
                    formHeight="35rem"
                    goBack={() => navigate("/")}
                    changeForm={() => navigate("/login")}
                    onClickSubmit={handleSubmit}
                    buttonValue="Register"
                    subText="Already registered? "
                    subTextLink="Login in"
                    formInput={[
                        <FormInput 
                            fieldName="Email"
                            height="35%"
                            placeholder="Your email here"
                            onChange={(e) => {
                                setLoginValue(e.target.value)
                            }}
                        />,
                        <FormInput
                            fieldName="Password"
                            height="35%"
                            placeholder="Your password here"
                            onChange={(e) => {
                                setPasswordValue(e.target.value)
                            }}
                        />,
                        <FormInput
                            fieldName="Confirm Password"
                            height="35%"
                            placeholder="Confirm your password"
                            onChange={(e) => {
                                setConfirmPasswordValue(e.target.value)
                            }}
                        />
                    ]}
                />
            </div>
        </div>
    );
}

export default Register;