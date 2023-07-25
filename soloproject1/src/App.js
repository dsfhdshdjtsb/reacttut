import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"
import portrait from "./images/portrait.jpg"
export default function App(){
    return(
        <div className="container">
            <img src={portrait}></img>
            <Info />
            <About />
            <Footer />
        </div>
    )
}