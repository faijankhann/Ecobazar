import "../components/productList1.css";
import { Btn } from "./button";
import { Items } from "./items";

export const ProductList = () => {
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