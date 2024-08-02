import "../../components/customerSupportSection/customerSupport.css"
import { SupportItem } from "./supportItems"

export const CustomerSupport = ()=>{
    return(
        <>
            <section className="featurd">
                <div className="container-box">
                    <SupportItem/>
                </div>
            </section>
        </>
    )
}