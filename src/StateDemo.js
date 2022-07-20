import React,{useState} from 'react'
function StateDemo(){

    //let message='Hiiiii'

    const[message,setMessage]=useState('State Demo')

    const check=()=>{
       // message='Hellooooo'
       setMessage('Hellooooooo!!!')
        console.log(message);
    }

    const handleChange=(event)=>{
        console.log(event.target.value);
    }

    return(
        <div>
            <h1>State Demo!!!</h1>
      
            <input type='text' onChange={handleChange}/>
            <button type='button' 
                onClick={check}>Check</button>
            <p>Message : {message}</p>
        </div>
    )
}

export default StateDemo