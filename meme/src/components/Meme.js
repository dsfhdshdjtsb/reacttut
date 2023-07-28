import {Button, Form} from "react-bootstrap"
import data from "../data"
export default function Meme(){
    function handleClick()
    {
        return data.data.memes[Math.floor(Math.random() * 100)].url
    }
    return(
        <div className="Meme">
            <form>
            <div className="FormInput">
                <Form.Control id="topText" type="text" placeholder="Top Text" />
                <Form.Control id="botText" type="text" placeholder="Bottom Text" />
            </div>
                <Button id="submit" onClick={() => console.log(handleClick())}>Generate my Meme</Button>
            </form>
        </div>
    )
}