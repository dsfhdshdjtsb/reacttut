// const everything = (
//     <div>
//         <img src= "./react-icon.svg.png" width = "40"></img>
//         <h1>Fun Facts About React</h1>
//         <ul>
//             <li>Was released in 2030</li>
//             <li>was original created by me</li>
//             <li>has over 100k github stars</li>
//             <li>is maintained by facebook</li>
//             <li>powers thousands of apps</li>
//         </ul>
//     </div>
// )
import Header from "Header"



function Page(){
    return(
        <div>
    <Header />
    <List />
    <Footer />
</div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))