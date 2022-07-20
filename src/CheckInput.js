import React from 'react'
function CheckInput(){
    
    const[text,setText]=React.useState('')
    const[message,setMessage]=React.useState('')

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const display=()=>{
        setMessage(text)
    }

    return(
        <div>
            <h1>Read Input</h1>
            <input type='text' onChange={handleChange}/>
            <button type='button' onClick={display}>Display</button>
            <p>Message : {message}</p>
        </div>
    )
}

export default CheckInput