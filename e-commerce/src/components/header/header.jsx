import "../../components/header/header.css"
import logoImage from '../../assets/images/Logo.png'

export const Header = () => {
    return <header>
        <div className="top-section">
            <p><i className="ri-map-pin-line"></i> Store Location Lincoin -344, Ilinois, Chicag, USA </p>
            <div className="top-inner">
                <p>Eng<i className="ri-arrow-down-s-line"></i></p>
                <p>USD<i className="ri-arrow-down-s-line"></i></p>
                <p className="login">Sing In / Sing Up</p>
            </div>
        </div>
        <div className="mid-head">
            <div className="logo">
                <img src={logoImage} alt="Ecobazar-logo" />
            </div>
            <div className="serch-input">
                <div className="search-bar">
                <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search" />
                </div>
                <button >Search</button>
            </div>

            <div className="wish">
                <i className="ri-heart-3-line"></i>
                <div className="wish-cart">
                    <i className="ri-shopping-bag-line"><span>7</span></i>
                    <div className="wish-cart-txt">
                        <p>Shoping Cart:</p>
                        <p>$57.00</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav">

            <ul>
                <li>Home <i className="ri-arrow-down-s-line"></i></li>
                <li>Shop <i className="ri-arrow-down-s-line"></i></li>
                <li>Pages <i className="ri-arrow-down-s-line"></i></li>
                <li>Blog <i className="ri-arrow-down-s-line"></i></li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div className="contact">

                <i className="ri-phone-line"></i>
                <p>
                    (229) 741614</p>
            </div>

        </div>
    </header>
}