function PropsDemo(){
    
    const message="Hello react"

    const person={
        name:"John",
        city:"Pune"
    }

    const userList=[{
        id:1,
        name:'John',
        city:'Pune'
    },{
        id:2,
        name:'Peter',
        city:'Mumbai'
    },{
        id:3,
        name:'Richard',
        city:'Bangalore'
    }]

    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

let fullDate = `${day}.${month}.${year}.`;
console.log(fullDate);

    return(
        <div>
            <h1>Props Demo!!!</h1>
            <ChildComp message={message} person={person}/>
            <DisplayList userList={userList}/>
        </div>
    )
}

function ChildComp(props){
    return(
        <div>
            <h2>Child Component</h2>
            <p>Message : {props.message}</p>
            <p>Name : {props.person.name}</p>
        </div>
    )
}

function DisplayList(props){
    return(
        <ul>
            {/* <li>{props.userList[0].name}</li>
            <li>{props.userList[1].name}</li>
            <li>{props.userList[2].name}</li> */}
            {
                props.userList.map((user)=>(
                    <div>
                    <li>{user.name+" | "+user.city}</li>
                    <button>View</button>
                    </div>
                ))
            }
        </ul>
    )
}
export default PropsDemo