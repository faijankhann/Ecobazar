import "../components/offer.css"

export const OfferRed = (props) =>{
    const {children} = props
    return(
        <span className="offer-red">{children}</span>
    )
}

export const OfferBlue = (props) =>{
    const {children} = props
    return(
        <span className="offer-blue">{children}</span>
    )
}