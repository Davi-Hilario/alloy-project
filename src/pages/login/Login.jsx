import style from './Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersController as api } from '../../api/api';
import Form from '../../components/form/Form';
import FormInput from '../../components/inputs/formInput/FormInput';

function Login() {

    let [loginValue, setLoginValue] = useState("");
    let [passwordValue, setPasswordValue] = useState("");
    const navigate = useNavigate();

    function handleSubmit () {
        api.post("/login", {
            email: loginValue,
            password: passwordValue
        }).then(response => {
            sessionStorage.TOKEN = new Date().toISOString();
            sessionStorage.NAME = response.data.name;
            sessionStorage.EMAIL = response.data.email;
            
            alert("Login realizado com sucesso!")
            // navigate("/");
        }).catch(err => {
            alert("The provided email AND/OR password are incorrect!")
        })
    }

    return (
        <div className={style["Login"]}>
            <div className={style["container"]}>
                <Form
                    goBack={() => navigate("/")}
                    changeForm={() => navigate("/register")}
                    title="LOGIN"
                    onClickSubmit={handleSubmit}
                    buttonValue="Login"
                    subText="Not registered yet? "
                    subTextLink="Create your account"
                    formInput={[
                        <FormInput 
                            fieldName="Email"
                            height="45%"
                            placeholder="Your email here"
                            onChange={(e) => {
                                setLoginValue(e.target.value)
                            }}
                        />,
                        <FormInput
                            fieldName="Password"
                            height="45%"
                            placeholder="Your password here"
                            onChange={(e) => {
                                setPasswordValue(e.target.value)
                            }}
                        />
                    ]}
                />
            </div>
        </div>
    );
}

export default Login;