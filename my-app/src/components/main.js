import logo from "../images/logo.png"
export default function Main(props){
    return(
        <div className = "Main" style={{color: props.isDarkMode ? "black": "white"}}>
            <h1>Fun Facts About React</h1>
            <ul >
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has over 100k github stars</li>
                <li>Maintained by facebook</li>
                <li>Powers thousands of enterpirse apps including mobile apps</li>
            </ul>
        </div>
        
    )
}