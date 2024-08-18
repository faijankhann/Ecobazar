import "./companys.css"
import { companyLogos } from "../../assets/images/clint-company/companyLogo"

export const Companys = () =>{
    return(
        <section className="company">
            <div className="company-container">
                <div className="company-img">
                    <img src={companyLogos.company1} alt="" />
                </div>

                <span className="border"></span>

                <div className="company-img">
                    <img src={companyLogos.company2} alt="" />
                </div>
                
                <span className="border"></span>

                <div className="company-img">
                    <img src={companyLogos.company3} alt="" />
                </div>
                <span className="border"></span>

                <div className="company-img">
                    <img src={companyLogos.company4} alt="" />
                </div>
                <span className="border"></span>

                <div className="company-img">
                    <img src={companyLogos.company5} alt="" />
                </div>
                <span className="border"></span>

                <div className="company-img .last-img">
                    <img src={companyLogos.company1} alt="" />
                </div>

                
            </div>
        </section>
    )
}