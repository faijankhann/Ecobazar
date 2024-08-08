import './fotter.css';

//////////////////////// import images ////////////////////////

import image1 from "../../assets/images/payment/ApplePay-logo.png"
import image2 from "../../assets/images/payment/Discover-logo.png"
import image3 from "../../assets/images/payment/visa-logo.png"
import image4 from "../../assets/images/payment/Mastercar-logo.png"
import image5 from "../../assets/images/payment/sequerpayment-logo.png"


//////////////////////// import images ////////////////////////

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2><img src="logo-svg.svg" alt="" />Ecobazar</h2>
                    <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <p>
                        <a href="tel:+12195550114">(219) 555-0114</a> or <a href="mailto:Proxy@gmail.com">Proxy@gmail.com</a>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>My Account</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Shopping Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Helps</h3>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Fruit & Vegetables</a></li>
                        <li><a href="#">Meat & Fish</a></li>
                        <li><a href="#">Bread & Bakery</a></li>
                        <li><a href="#">Beauty & Health</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
                <div className="payment-methods">
                    <img src={image1} alt="Apple Pay" />
                    <img src={image2} alt="Visa" />
                    <img src={image3} alt="Discover" />
                    <img src={image4} alt="Mastercard" />
                    <img src={image5} alt="Secure Payment" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
