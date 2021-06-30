import React from 'react'
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'
function Topics(){
    const {path,url} = useRouteMatch()
    console.log('useRouteMatch',path, url);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/renderding`}>Rendering width React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic/>
                </Route>
            </Switch>
        </div>
    )
}
function Topic(){
    const {topicId} = useParams()
    console.log('topicId',topicId);
    return (
        <div>
            {topicId}
        </div>
    )
}
function Home(){
    return (
        <div>
            <h2>
                Home
            </h2>
        </div>
    )
}
export default (props) => {
    return (
       <Router>
           <div>
               <ul>
                   <li>
                       <Link to='/'>Home</Link>
                   </li>
                   <li>
                       <Link to='/topics'>Topics</Link>
                   </li>
               </ul>
               <hr/>
               <Switch>
                   <Route path='/topics'>
                       <Topics/>
                   </Route>
               </Switch>
           </div>
       </Router>
    )
}
