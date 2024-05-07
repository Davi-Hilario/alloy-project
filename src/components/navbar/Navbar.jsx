import style from './Navbar.module.css';
import Button from '../buttons/Buttons';

import { useNavigate } from 'react-router-dom';
import doesTokenExists from '../../validateAuthentication';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Navbar () {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    let [isLogged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(doesTokenExists());
    }, [])

    let login = () => {
        navigate("/login")
        window.location.reload();
    };

    let leave = () => {
        sessionStorage.clear();
        alert("Bye ;)")
        window.location.reload();
    };

    let register = () => {
        navigate("/register")
        window.location.reload();
    };

    let cartIcon = () => {
        navigate("/cart")
        window.location.reload();
    };

    return (
        <div className={style["navbar"]}>
            <div className={style["container"]}>
                <img alt="React icon" className={style["logo-icon"]} />
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
                            <div className={style['cart-button-area']}>
                                <button 
                                    className={style['shopping-cart-btn']} 
                                    onClick={cartIcon}
                                ></button> 
                                <span>{cart.length}</span>
                            </div>
                            
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