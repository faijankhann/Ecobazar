import "../components/hotDeals.css";
import { HotDEalItems } from "./hotItem";
import { Btn } from "./button";
export const HotDeal = () =>{
    return(
        <section className="hotdeal">
              <div className="product-container">
            <h2>Hot Products</h2>
            <Btn>View More  <i className="ri-arrow-right-line"></i></Btn>
        </div>
            <HotDEalItems/>
        </section>
    )
}