import './subscribe.css';

const SubscribeSection = () => {
    return (
        <div className="subscribe-section-container">
            <div className="subscribe-section-content">
                <h3>Subscribe to our Newsletter</h3>
                <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className="subscribe-section-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
            </div>
            <div className="subscribe-section-social-icons">
                <a href="#"><i class="ri-facebook-line"></i></a>
                <a href="#"><i class="ri-twitter-fill"></i></a>
                <a href="#"><i class="ri-pinterest-line"></i></a>
                <a href="#"><i class="ri-instagram-line"></i></a>
            </div>
        </div>
    );
};

export default SubscribeSection;