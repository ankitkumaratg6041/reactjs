import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => { 
    const [btnTitle, setBtnTitle] = useState("Login")
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src={LOGO_URL}></img>
            </div>

            <div className='nav-container'>
                <ul className='nav-list'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </div>
            <button className={`header-btn ${btnTitle === "Login" ? "header-login-btn" : "header-logout-btn"}`} onClick={() => {
                btnTitle === "Login" ? setBtnTitle("Logout") : setBtnTitle("Login")
            }}>{btnTitle}</button>
        </header>
    );
}

export default Header;