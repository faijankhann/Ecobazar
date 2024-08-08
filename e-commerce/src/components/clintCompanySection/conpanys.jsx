import "./companys.css"

//////////////////////// import images ////////////////////////

import company1 from "../../assets/images/clint-company/conpany-logo-1.png"
import company2 from "../../assets/images/clint-company/conpany-logo-2.png"
import company3 from "../../assets/images/clint-company/conpany-logo-3.png"
import company4 from "../../assets/images/clint-company/conpany-logo-4.png"
import company5 from "../../assets/images/clint-company/conpany-logo-5.png"


//////////////////////// import images ////////////////////////

export const Companys = () =>{
    return(
        <section className="company">
            <div className="company-container">
                <div className="company-img">
                    <img src={company1} alt="" />
                </div>

                <span className="border"></span>

                <div className="company-img">
                    <img src={company2} alt="" />
                </div>
                
                <span className="border"></span>

                <div className="company-img">
                    <img src={company3} alt="" />
                </div>
                <span className="border"></span>

                <div className="company-img">
                    <img src={company4} alt="" />
                </div>
                <span className="border"></span>

                <div className="company-img">
                    <img src={company5} alt="" />
                </div>
                <span className="border"></span>

                <div className="company-img .last-img">
                    <img src={company1} alt="" />
                </div>

                
            </div>
        </section>
    )
}