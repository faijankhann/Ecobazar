import "./supportItems.css";
export const SupportItem = () => {

    return (
        <>
            <div className="featurd-box">
                <i className="ri-truck-line"></i>
                <div className="featurd-info">
                    <h5>Free Shipping</h5>
                    <p>Free shipping on all your order</p>
                </div>
            </div>

            <div className="featurd-box">
            <i className="ri-customer-service-2-line"></i>
                <div className="featurd-info">
                    <h5>Customer Support 24/7</h5>
                    <p>Instant access to Support</p>
                </div>
            </div>

            <div className="featurd-box">
            <i className="ri-shopping-bag-line"></i>
                <div className="featurd-info">
                    <h5>100% Secure Payment</h5>
                    <p>We ensure your money is save</p>
                </div>
            </div>

            <div className="featurd-box">
            <i className="ri-box-3-line"></i>
                <div className="featurd-info">
                    <h5>Money-Back Guarantee</h5>
                    <p>Money-Back Guarantee</p>
                </div>
            </div>
        </>
    )
}