import React,{useState} from "react";
import ReactDOM from 'react-dom'
import UseEffectDemo from "./UseEffectDemo/index";
function App(){
    const [num,setNum] = useState(0)
    const obj={
        name:'lisa'
    }
    setTimeout(()=>{
       // obj.name='jack'+num
    },1000)
    return (
        <UseEffectDemo obj={obj}/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
