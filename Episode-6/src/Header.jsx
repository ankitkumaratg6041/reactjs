import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => { 
    const [btnTitle, setBtnTitle] = useState("Login")
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src={LOGO_URL}></img>
            </div>

            <div className='nav-container'>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className={`header-btn ${btnTitle === "Login" ? "header-login-btn" : "header-logout-btn"}`} onClick={() => {
                btnTitle === "Login" ? setBtnTitle("Logout") : setBtnTitle("Login")
            }}>{btnTitle}</button>
        </header>
    );
}

export default Header;