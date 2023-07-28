import React from "react"
export default function Joke(props){
    const [isShown, setIsShown] = React.useState(false)
    return(
            <div>
                {isShown && <p>{props.setup}</p>}
                {isShown && <p>{props.punchline}</p>}
                <button onClick={()=>{setIsShown(prev=>!prev)}}>{isShown ? "Hide" : "Show"} joke</button>
            </div>
        )
}