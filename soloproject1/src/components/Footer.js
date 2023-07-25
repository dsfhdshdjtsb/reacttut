import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'


export default function Footer(){
    return(
        <div className='Footer'>
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={github}></img>
        </div>
    )
}