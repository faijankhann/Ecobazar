import "../../components/heroSection/hero.css"
import { Btn } from "../global/buttons/button"

export const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="container">

                    <div className="inner-hero1">
                        <div className="hero1-txt">
                            <h1>Freash & Health<br />Organic Food</h1>
                            <div className="hro-in-txt">

                                <h4>Sale up to <span>30% OFF</span></h4>
                                <p>Free shipping on all your order.</p>
                            </div>
                            <button>Shop Now  <i className="ri-arrow-right-line"></i></button>

                        </div>
                    </div>
                    <div className="inner-hero2">
                        <div className="bn1">
                            <div className="bn1-txt">
                                <h4>Summer Sale</h4>
                                <h2>75% OFF</h2>
                                <p>Only Fruit & Vegetable</p>
                                <Btn>Shop Now <i className="ri-arrow-right-line"></i></Btn>
                            </div>
                        </div>
                        <div className="bn2">
                            <div className="bn2-txt">
                                <p>BEST DEAL</p>
                                <h2>Special Products<br />Deal of the Month</h2>
                                <Btn>Shop Now <i className="ri-arrow-right-line"></i></Btn>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}