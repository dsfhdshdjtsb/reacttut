import logo from "../images/logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo}></img>
            <h3>React Facts</h3>
            <h4>React course - project 1</h4>
        </nav>
    )
}