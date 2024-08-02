import "./hotItem.css"
import { OfferBlue, OfferRed } from "../offer"
import CountdownTimer from "../countdownTimer"


export const HotDealItems = () => {
    return (<>
        <div className="popular-container">
            <div className="popular-item big-product">

                <OfferRed>50% off</OfferRed>


                <img src="big-product.png" alt="" />
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
                <img src="popular-product-Image2.png" alt="" />
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
                <img src="popular-product-Image3.png" alt="" />
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
                <img src="popular-product-Image4.png" alt="" />
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
                <img src="popular-product-image5.png" alt="" />
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
                <img src="popular-product-Image6.png" alt="" />
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
                <img src="popular-product-Image7.png" alt="" />
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
                <img src="popular-product-Image8.png" alt="" />
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
                <img src="popular-product-Image9.png" alt="" />
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
                <img src="popular-product-image11.png" alt="" />
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
                <img src="popular-product-image12.png" alt="" />
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
                <img src="popular-product-image13.png" alt="" />
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