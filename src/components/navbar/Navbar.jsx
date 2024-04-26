import style from './Navbar.module.css';
import Button from '../buttons/Buttons';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar () {

    const [isLogado, setLogado] = useState(false);
    const navigate = useNavigate();

    let login = () => {
        navigate("/login")
    };

    let leave = () => {
        setLogado(false);
    };

    let register = () => {
        navigate("/register")
    };

    let account = () => {
        console.log("Your account");
    };

    return (
        <div className={style["navbar"]}>
            <div className={style["container"]}>
                <img alt="React icon" className={style["react-logo-icon"]} />
                <div className={style["btn-area"]}>
                    {!isLogado && (
                        <>
                            <Button 
                                value={"Login"}
                                onClick={login}
                            />
                            <Button 
                                value={"Register"}
                                onClick={register}
                            />
                        </>
                    )}
                    {isLogado && (
                        <>
                            <Button 
                                value={"Account"}
                                onClick={account}
                            />
                            <Button 
                                value={"Leave"}
                                onClick={leave}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}


export default Navbar;