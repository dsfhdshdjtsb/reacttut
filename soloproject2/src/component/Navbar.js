import globe from "../image/White_Globe_Icon.png"
export default function Navbar(){
    return(
        <nav>
        <span id="title">
            <img src={globe} />
            <h1>My Travel Journel</h1>
        </span>
            
        </nav>
    )
}