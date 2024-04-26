import style from './Login.module.css'
import Button from '../../components/buttons/Buttons';
import FormInput from '../../components/inputs/formInput/FormInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    let [loginValue, setLoginValue] = useState("");
    let [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();

    function handleLogin () {
        console.log("Login: " + loginValue);
        console.log("Password: " + passwordValue);
    }

    return (
        <div className={style["Login"]}>
            <div className={style["container"]}>
                <div className={style["form"]}>
                    <div className={style["form-header"]}>
                        <button onClick={() => navigate("/")}></button>
                        <h1>LOGIN</h1>
                        <p></p>
                    </div>
                    <div className={style["form-body"]}>
                        <FormInput 
                            fieldName="Email"
                            height="45%"
                            placeholder="Your email here"
                            onChange={(e) => {
                                setLoginValue(e.target.value)
                            }}
                        />
                        <FormInput
                            fieldName="Password"
                            height="45%"
                            placeholder="Your password here"
                            onChange={(e) => {
                                setPasswordValue(e.target.value)
                            }}
                        />
                    </div>
                    <div className={style["form-footer"]}>
                        <Button 
                            value="Login"
                            height="3.5rem"
                            width="50%"
                            fontSize="20px"
                            onClick={handleLogin}
                        />
                        <p>Not registered yet? <b onClick={() => navigate("/register")} className={style["create-account"]}>Create your account</b></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Login;