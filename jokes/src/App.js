import Joke from "./components/Joke";
import jokesData from "./jokesData"

export default function App(props){
    console.log(jokesData)
    const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return(
        <div>
            {jokeElements}
        </div>
        )
}