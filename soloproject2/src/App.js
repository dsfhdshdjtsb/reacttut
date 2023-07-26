import Navbar from "./component/Navbar.js";
import data from "./data.js"
import Card from "./component/Card.js"
export default function App(){
    const cards = data.map(item => {
        return <Card {...item}/ >
    })
    return(
        <div className = "container">
            <Navbar />
            {cards}
        </div>
    )
}