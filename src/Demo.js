import React from "react"
import Demo1 from "./Demo1"

// function Demo(){
//     return(
//         <div>
//             <h1>Demo</h1>
//             <p>This is Demo component</p>
//             <Demo1/>
//         </div>
//     )
// }

class Demo extends React.Component{
    render(){
        return(
            <div>
                <h1>Demo</h1>
                <p>This is Demo component</p>
                <Demo1/>
            </div>
        )
    }
}

export default Demo