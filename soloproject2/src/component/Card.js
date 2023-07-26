import icon from "../image/point.png"
export default function Card(props){
    return(
        <div className="Card">
            <img src={props.img}></img>
            <div className="Main">
                <span id="header">
                    <img src= {icon}></img>
                    <p>{props.location}</p>
                    <a href={props.link}>View on google maps</a>
                </span>
                <h2>{props.title}</h2>
                
                <h4>{props.start} - {props.end}</h4>
                <p>{props.desc}</p>
            </div>
            
        </div>
    )
}