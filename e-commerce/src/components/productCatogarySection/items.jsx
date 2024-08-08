import "../../components/productCatogarySection/items.css"

//////////////////////// import images ////////////////////////

import image1 from "../../assets/images/product-catogary/image-1.png"
import image2 from "../../assets/images/product-catogary/image-2.png"
import image3 from "../../assets/images/product-catogary/image-3.png"
import image4 from "../../assets/images/product-catogary/image-4.png"
import image5 from "../../assets/images/product-catogary/image-5.png"
import image6 from "../../assets/images/product-catogary/image-6.png"
import image7 from "../../assets/images/product-catogary/image-7.png"
import image8 from "../../assets/images/product-catogary/image-8.png"
import image9 from "../../assets/images/product-catogary/image-9.png"
import image10 from "../../assets/images/product-catogary/image-10.png"
import image11 from "../../assets/images/product-catogary/image-11.png"
import image12 from "../../assets/images/product-catogary/image-12.png"

//////////////////////// import images ////////////////////////

export const Items= ()=>{

    
    return(<>
        <div className="small-product">
            <img src={image1} alt="product" />
            <p>Fresh Frutes</p>
        </div>

        <div className="small-product">
            <img src={image2} alt="product" />
            <p>Fresh Vegetables</p>
        </div>

        <div className="small-product">
            <img src={image3} alt="" />
            <p>Meat & Fish </p>
        </div>

        <div className="small-product">
            <img src={image4} alt="" />
            <p>Snacks</p>
        </div>

        <div className="small-product">
            <img src={image5} alt="" />
            <p>Beverages</p>
        </div>

        <div className="small-product">
            <img src={image6} alt="" />
            <p>Beauty & Health</p>
        </div>

        <div className="small-product">
            <img src={image7} alt="" />
            <p>Bread & Bakery</p>
        </div>

        <div className="small-product">
            <img src={image8} alt="" />
            <p>Baking Needs</p>
        </div>

        <div className="small-product">
            <img src={image9} alt="" />
            <p>Cooking</p>
        </div>

        <div className="small-product">
            <img src={image10} alt="" />
            <p>Diabetic Food</p>
        </div>

        <div className="small-product">
            <img src={image11} alt="" />
            <p>Dish Detergents</p>
        </div>

        <div className="small-product">
            <img src={image12} alt="" />
            <p>Oil</p>
        </div>
    </>)
}