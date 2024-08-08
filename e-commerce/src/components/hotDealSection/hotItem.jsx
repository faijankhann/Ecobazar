import "./hotItem.css"
import { OfferBlue, OfferRed } from "../global/offer/offer"
import CountdownTimer from "../global/countdown/countdownTimer"


//////////////////////// import images ////////////////////////

import product1 from "../../assets/images/popular-products/big-product.png"
import product2 from "../../assets/images/popular-products/popular-product-Image2.png"
import product3 from "../../assets/images/popular-products/popular-product-Image3.png"
import product4 from "../../assets/images/popular-products/popular-product-Image4.png"
import product5 from "../../assets/images/popular-products/popular-product-Image5.png"
import product6 from "../../assets/images/popular-products/popular-product-Image6.png"
import product7 from "../../assets/images/popular-products/popular-product-Image7.png"
import product8 from "../../assets/images/popular-products/popular-product-Image8.png"
import product9 from "../../assets/images/popular-products/popular-product-Image9.png"
import product10 from "../../assets/images/popular-products/popular-product-Image10.png"
import product11 from "../../assets/images/popular-products/popular-product-Image11.png"
import product12 from "../../assets/images/popular-products/popular-product-Image12.png"

//////////////////////// import images ////////////////////////


export const HotDealItems = () => {
    return (<>
        <div className="popular-container">
            <div className="popular-item big-product">

                <OfferRed>50% off</OfferRed>


                <img src={product1} alt="" />
                <div className="big-product-txt">
                    <div className="add-cart">
                        <span><i className="ri-heart-line"></i></span>
                        <p>Add To Cart</p>
                        <span><i className="ri-eye-line"></i></span>
                    </div>
                    <p>Green Apple</p>

                    <p>
                        $11.99 <span> <s>$20.98</s></span>
                    </p>

                    <span>⭐⭐⭐⭐⭐</span>
                    <div className="product-timer">

                    <CountdownTimer  initialDays={35} initialHours={20} initialMinutes={15} initialSeconds={0} />
                    </div>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product2} alt="" />
                <div className="popular-item-txt">
                    <p>Fresh Indian Malta</p>
                    <div className="pit-rs-icon">
                        <p>
                            $21.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product3} alt="" />
                <div className="popular-item-txt">
                    <p>Chinese cabbage</p>
                    <div className="pit-rs-icon">
                        <p>
                            $1.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product4} alt="" />
                <div className="popular-item-txt">
                    <p>Green Lettuce</p>
                    <div className="pit-rs-icon">
                        <p>
                            $15.00
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product5} alt="" />
                <div className="popular-item-txt">
                    <p>Eggplant</p>
                    <div className="pit-rs-icon">
                        <p>
                            $2.99 <span> <s>$5.18</s></span>
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product6} alt="" />
                <div className="popular-item-txt">
                    <p>Big Potatoes</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product7} alt="" />
                <div className="popular-item-txt">
                    <p>Corn</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>

                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product8} alt="" />
                <div className="popular-item-txt">
                    <p>Fresh Cauliflower</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <OfferBlue>Best sale</OfferBlue>
                <img src={product9} alt="" />
                <div className="popular-item-txt">
                    <p>Green Capsicum</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99 <span> <s>$20.98</s></span>
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product10}  alt="" />
                <div className="popular-item-txt">
                    <p>Green Chili</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product11}  alt="" />
                <div className="popular-item-txt">
                    <p>Green Chili</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

            <div className="popular-item">
                <span className="hover-icon">
                    <i className="ri-heart-line"></i>
                </span>
                <span className="hover-icon">
                    <i className="ri-eye-line"></i>
                </span>
                <img src={product12}  alt="" />
                <div className="popular-item-txt">
                    <p>Green Chili</p>
                    <div className="pit-rs-icon">
                        <p>
                            $11.99
                        </p>
                        <i className="ri-shopping-bag-line"></i>
                    </div>
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>
        </div>
    </>)
}