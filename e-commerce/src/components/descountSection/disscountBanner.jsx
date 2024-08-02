import "./discountBanner.css"
import { Btn2 } from "../global/buttons/button"

export const DiscountBanner = () =>{
    return(
        <section className="discount-banner">
            <div className="discount-container">
                <div className="discount-cont-txt">
                    <span>
                    Summer Sale
                    </span>
                    <h4>
                        <strong>37%</strong>OFF
                    </h4>
                    <p>
                    Free on all your order, Free Shipping and  30 days <br /> money-back guarantee
                    </p>
                    <div>
                        
                    <Btn2>Shop Now  <i className="ri-arrow-right-line"></i></Btn2>
                    </div>
                </div>
            </div>

        </section>
    )
}