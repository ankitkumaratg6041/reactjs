import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header Component
 * - Logo
 * - Nav Items
 * Body Component
 * - Search
 * - Restaurant Container
 *  - Restaurant Card
 * Footer Component
 * - Links
 * - Address
 * - Contact
 * - Copy Right
 */

const App = () => { 
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

const Header = () => { 
    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src='https://img.pikbest.com/png-images/20241030/culinary-restaurant-logo-design_11027332.png!sw800'></img>
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

/**
 * 
 * @returns Body Component Utilities
 */
const Search = () => { 
    return (
        <div className='search-container'>
            <input type='text' placeholder='Search Restaurant'/>
            <button>Search</button>
        </div>
    );
}
const RestaurantContainer = () => { 
    return (
        <div className='restaurant-container'>
            <div className='card-image-container'>
                <img src='https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347444/india-food-butter-chicken/india-food-butter-chicken-1120x732.jpg' alt='Butter-Chicken'/>
            </div>
            <div className='card-info'>
                <h3>Butter Chicken</h3>
                <p className='tags'>Butter Chicken, North Indian, Asian</p>
                <span className='rating-time'>
                    <h4>4.8 Stars</h4>
                    <h4>40 minutes</h4>
                </span>
            </div>
            <button>Order Now</button>
        </div>
    )
}

const Body = () => { 
    return (
        <div>
            <Search />
            <div className='res-card-container'>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
                <RestaurantContainer/>
            </div>
        </div>
    )
}

const Footer = () => { 
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-links'>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Cart</li>
                        <li>Profile</li>
                    </ul>
                    <ul>
                        <li>Legal</li>
                        <li>Privacy Policy</li>
                        <li>In Media</li>
                        <li>Advertise</li>
                    </ul>
                </div>
                <div className='footer-address-contact'>
                    <div className='footer-contact'>
                        <form>
                            <input type='text' placeholder='Name'/>
                            <input type='email' placeholder='Email'/>
                            <textarea placeholder='Message'/>
                        </form>
                            <button>Subscribe</button>
                    </div>
                    <div className='footer-address'>
                        <div className='address'>
                            <p className='footer-title'>Corporate & Communications Address:</p>
                            <p>A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305)</p>
                        </div>
                        <div className='phone'>
                            <p className='footer-title'>Phone number:</p>
                            <p>+1 (403)-929-5825</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy-right-container'>
                <p>&copy; 2021 All Rights Reserved</p>
            </div>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);