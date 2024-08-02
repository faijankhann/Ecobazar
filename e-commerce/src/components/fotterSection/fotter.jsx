import './fotter.css';

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
                    <img src="ApplePay-logo.png" alt="Apple Pay" />
                    <img src="Discover-logo.png" alt="Visa" />
                    <img src="visa-logo.png" alt="Discover" />
                    <img src="Mastercar-logo.png" alt="Mastercard" />
                    <img src="sequerpayment-logo.png" alt="Secure Payment" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
