import React,{useState} from "react";
import ReactDOM from 'react-dom'
import UseAsyncDemo from "./CustomHooksDemo/useAsync/index.jsx";
function App(){
    return (
        <UseAsyncDemo/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
