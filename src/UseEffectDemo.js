import React, { useEffect } from "react"
import axios from "axios"
function UseEffectDemo(){

    // const data=[{
    //     name:'A',
    //     city:"Pune"
    // },{
    //     name:'B',
    //     city:'Mumbai'
    // }]

    const[data,setData]=React.useState([])

    const[check,setCheck]=React.useState(false)

    useEffect(()=>{
        console.log('in use effect');
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
            setData(res)
        })
    },[check])

    const checkState=()=>{
        setCheck(true)
    }
    return(
        <div>
            <h1>USe Effect Demo!!!</h1>
            <ul>
                {
                    data.map((item)=>(
                        <li key={item.id}>{item.name+" | "+item.email}</li>
                    ))
                }
            </ul>

            <button type='button' onClick={checkState}>Check</button>
        </div>
    )
}

export default UseEffectDemo