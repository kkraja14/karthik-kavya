import { render } from "@testing-library/react"
import { Component, startTransition } from "react"
import axios from "axios"

class ClassExample extends Component{
    
    // state create
    constructor(){
        super()
        this.state={
            data:"hello"
        }
       
    }
    changehandler(){
        this.setState({
            data:"welcome to connon"
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            this.setState(res.data)
        })
        .catch(()=>{
            this.setState({
                data:[]
            })
        })

        }
    render(){
        return <>
        <h1>Welcome-{this.state.data}</h1>
        <button onClick={()=>this.changehandler()}>click change</button>
        </>
    }

}
export default ClassExample;