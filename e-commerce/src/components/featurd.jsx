import "../components/featurd.css"
import { FeaturdItem } from "./featurditem"

export const Featurd = ()=>{
    return(
        <>
            <section className="featurd">
                <div className="container-box">
                    <FeaturdItem/>
                </div>
            </section>
        </>
    )
}