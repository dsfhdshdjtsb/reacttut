import {Button, Form} from "react-bootstrap"
import data from "../data"
import React from "react"

export default function Meme(){
    const [allMemeImages, setAllMemeImages] = React.useState([])
    const [meme, setMeme] = React.useState({
        topText: "",
        botText: "",
        imgUrl: "https://i.imgflip.com/1big.jpg"
    })
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response =>{
            return response.json();
        })
        .then(memes=>{
            setAllMemeImages(memes)
        })
    }, [])
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prev =>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    console.log(meme.topText)
    console.log(meme.botText)
    function getImgUrl()
    {
        const memesArray = allMemeImages.data.memes
        return memesArray[Math.floor(Math.random() * 100)].url
    }
    return(
        <div className="Meme">
            <form>
            <div className="FormInput">
                <input type="text"
                    placeholder="Top Text"
                    id="topText"
                    name="topText"
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder="Bottom Text"
                    id="botText"
                    name="botText"
                    onChange={handleChange}
                />
            </div>
                <Button id="submit" onClick={() => setMeme({...meme, imgUrl:getImgUrl()})}>Generate my Meme</Button>
                <div className="meme">
                    <img src={meme.imgUrl} className="meme--image"></img>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.botText}</h2>
                </div>
                
            </form>
        </div>
    )
}