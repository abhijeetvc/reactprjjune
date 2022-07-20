
class ComponentMethods extends React.Component{


    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData=()=>{
        console.log('in use effect');
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
            
        })
    }

    componentDidUpdate(){
        this.getData()
    }

    render(){

    }
}