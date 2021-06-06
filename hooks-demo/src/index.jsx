import React,{useState} from "react";
import ReactDOM from 'react-dom'
import CustomHooksDemo from "./CustomHooksDemo/index.jsx";
function App(){
    return (
        <CustomHooksDemo/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
