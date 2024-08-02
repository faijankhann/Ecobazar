import "./popularProcuct.css";
import { Btn } from "../global/buttons/button";
import { PopularItem } from "./popularItem";

export const PopularProcuct = () => {
    return (<>

        <section className="popular-product">

        <div className="product-container">
            <h2>Popular Products</h2>
            <Btn>View More  <i className="ri-arrow-right-line"></i></Btn>
        </div>

        <div className="popurlar-products-wrapper">
            <PopularItem/>
        </div>
        </section>
    </>)
}