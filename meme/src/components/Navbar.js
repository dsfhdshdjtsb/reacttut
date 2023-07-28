import trollface from "../images/trollface.png"
export default function Navbar(){
    return(
        <nav>
        <span id="title">
            <img src= {trollface}/>
            <h1>Meme Generator</h1>
        </span>
        <h2>React course - Project 3</h2>
        </nav>
    )
}