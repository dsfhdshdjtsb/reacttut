import portrait from "../images/portrait.jpg"
import Button from 'react-bootstrap/Button';
import email from '../images/email.png'
import linkedin from '../images/linkedin.png'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Info(){
    return(
        <div className = "Info">
            <h1>Nicholas Suh</h1>
            <h5>FrontEnd dev</h5>
            <p>nicksuh@gatech.edu</p>
            <div className="buttons">
                <Button variant="light" id="emailbtn"><img src={email}></img>Email</Button>{' '}
                <Button variant="primary" id="linkedinbtn"><img src={linkedin}></img>Linkedin</Button>{' '}
            </div>
            
        </div>
        
    )
}