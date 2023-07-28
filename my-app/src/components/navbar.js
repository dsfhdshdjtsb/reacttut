import logo from "../images/logo.png"

export default function Navbar(props){
    return(
        <nav style={{backgroundColor: props.isDarkMode ? "#DEEBF8" : "#21222A"}}>
            <img src={logo}></img>
            <h3>React Facts</h3>
            <p style={{color: props.isDarkMode ? "black": "white" }}>light mode</p>
            <label class="switch">
                <input type="checkbox" onChange={props.toggle}/>
                <span class="slider round"></span>
            </label>
            <p style={{color: props.isDarkMode ? "black": "white"}}>dark mode</p>
        </nav>
    )
}