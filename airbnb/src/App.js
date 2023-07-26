import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Card from "./components/Card"
import Contact from "./components/Contact"
import portrait from "./images/portrait.jpg"
import data from "./data.js"
export default function App(){
    const cards = data.map(exp=>{
        return <Card key ={exp.id} img ={exp.coverImg} rating ={exp.stats.rating} reviewcount = {exp.stats.reviewCount} country = {exp.location} title={exp.title} openSpots={exp.openSpots}/>
    })
    return(
        <div className="container">
        <Navbar></Navbar>
        <Intro></Intro>
            {cards}
        </div>
        
    )
}