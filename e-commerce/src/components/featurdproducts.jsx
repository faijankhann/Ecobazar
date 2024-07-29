import "../components/featurdproducts.css"
import { Btn } from "./button"
import { FeaturdProductItems } from "./fearurdProductItems"
export const FeaturdProducts = () =>{
    return(
        <section className="featurd-products">
             <div className="product-container">
            <h2>Featurd Products</h2>
            <Btn>View More  <i className="ri-arrow-right-line"></i></Btn>
        </div>
        <FeaturdProductItems/>
        
        </section>
    )
}