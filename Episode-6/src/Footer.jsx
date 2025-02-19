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

export default Footer;