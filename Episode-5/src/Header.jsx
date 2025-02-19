import { LOGO_URL } from "../utils/constants";

const Header = () => { 
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
        </header>
    );
}

export default Header;