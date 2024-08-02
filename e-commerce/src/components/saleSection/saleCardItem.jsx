import "../saleSection/saleCardItem.css";
import { Btn2 } from "../global/buttons/button";
import CountdownTimer from "../global/countdown/countdownTimer";

export const SaleCardItems = () => {
    return (<>
        <div className="banner-container">
            <div className="main-banner banner1">
                <div className="mb-txt">
                    <span>Best Deals</span>
                    <h2>Sale of the Month</h2>
                    <CountdownTimer initialDays={35} initialHours={20} initialMinutes={15} initialSeconds={0} />
                    <Btn2>Shop Now  <i className="ri-arrow-right-line"></i></Btn2>
                </div>
            </div>

            <div className="main-banner banner2">
                <div className="mb-txt">
                    <span>85% Fat Free</span>
                    <h2>Low-Fat Meat</h2>
                    <p>Started at <span className="yello-rate">$79.99</span></p>
                    <Btn2>Shop Now  <i className="ri-arrow-right-line"></i></Btn2>
                </div>
            </div>

            <div className="main-banner banner3">
                <div className="mb-txt">
                    <span>Summer Sale</span>
                    <h2>100% Fresh Fruit</h2>
                    <p>Up to <span className="bgc-rate">60% OFF</span></p>
                    <Btn2>Shop Now  <i className="ri-arrow-right-line"></i></Btn2>
                </div>
            </div>
        </div>
    </>)
}
