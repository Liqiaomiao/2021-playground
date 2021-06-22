import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
function Temp1(){
    return (<div>temp1</div>)
}
function Temp2(){
    return (<div>temp2</div>)
}
function Temp3(){
    return (<div>temp3</div>)
}
export default ()=>{
    return (
        <>
            router-index
            <Switch>
                <Route path='/temp1' component={Temp1}></Route>
                <Route path='/temp2' component={Temp2}></Route>
                <Route path='/temp3' component={Temp3}></Route>
            </Switch>
        </>
    )
}
