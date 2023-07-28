import Main from "./components/main"
import Navbar from "./components/navbar"
import React from "react"
export default function App(){
    const [darkMode, setDarkMode] = React.useState(false)
    function toggle(){
        setDarkMode(prev => !prev)
        document.body.style.backgroundColor = darkMode ? "#282D35":"white" 
    }
    return(
        <div className="container">
            <Navbar isDarkMode={darkMode} toggle={toggle}/>
            <Main isDarkMode={darkMode}/>
        </div>
    )
}