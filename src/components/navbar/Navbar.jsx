import style from './Navbar.module.css';
import Button from '../buttons/Buttons';

import { useNavigate } from 'react-router-dom';
import doesTokenExists from '../../validateAuthentication';
import { useEffect, useState } from 'react';

function Navbar () {

    const navigate = useNavigate();
    let [isLogged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(doesTokenExists());
    }, [])

    let login = () => {
        navigate("/login")
    };

    let leave = () => {
        sessionStorage.clear();
        alert("Bye ;)")
        window.location.reload();
    };

    let register = () => {
        navigate("/register")
    };

    let cart = () => {
      console.log("cart")  
    };

    return (
        <div className={style["navbar"]}>
            <div className={style["container"]}>
                <img alt="React icon" className={style["react-logo-icon"]} />
                <div className={style["btn-area"]}>
                    {!isLogged && (
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
                    {isLogged && (
                        <>
                            <button 
                                className={style['shopping-cart-btn']} 
                                onClick={cart}
                            ></button> 
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