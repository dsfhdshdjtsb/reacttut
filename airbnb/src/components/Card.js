import portrait from "../images/portrait.jpg"
import star from "../images/star.png"
export default function Card(props){
    return(
        <div className = "Card">
            <img src={props.img}></img>
            {props.openSpots ===1 && <p id="status"> SOLD OUT </p>}
            <div className = "Rating">
                <img src={star}></img>
                <p>{props.rating} ({props.reviewcount})  | {props.country}</p>
            </div>
            <p id="desc">{props.title}</p>
            <div className="Pricing">
                <p id="price">{props.price}</p>
                <p> / person</p>
            </div>

        </div>
    )
}