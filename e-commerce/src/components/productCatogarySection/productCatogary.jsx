import "../../components/productCatogarySection/productCatogary.css";
import { Btn } from "../global/buttons/button";
import { Items } from "./items";

export const ProductCatogary = () => {
    return (<>
        <section className="products">
            <div className="product-container">
                <h2>Products Catogary</h2>
                <Btn>View More  <i className="ri-arrow-right-line"></i></Btn>

            </div>

            <div className="item-wraper">
                    <Items />
            </div>

        </section>
    </>)
}