import {useState, useRef, useEffect, forwardRef} from 'react'
import Lifecycle15 from "./components/lifecycle/lifecycle15";
import Lifecycle16 from "./components/lifecycle/lifecycle16";
import ErrorBoundary from './components/ErrorBoundary';
import NiceModalExample from './components/NiceMoal/NiceModalExample'
import NiceModalUserInfo from './components/NiceMoal/UsersLayout'
import MyRouter from "./components/RouterDemo/MyRouter";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/life-cycle15'>Life cycle15</Link>
                    </li>
                    <li>
                        <Link to='/life-cycle16'>Life cycle16</Link>
                    </li>
                    <li>
                        <Link to='/error-boundary'>ErrorBoundary</Link>
                    </li>
                    <li>
                        <Link to='/NiceModalExample'>NiceModalExample</Link>
                    </li>
                    <li>
                        <Link to='/NiceModalUserInfo'>NiceModalUserInfo</Link>
                    </li>
                    <li>
                        <Link to='/'>index</Link>
                        <ul>
                            <li>
                                <Link to='/temp1'>temp1</Link>
                            </li>
                            <li>
                                <Link to='/temp2'>temp2</Link>
                            </li>
                            <li>
                                <Link to='/temp3'>temp3</Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <Switch>
                <Route path="/life-cycle15" exact>
                    <Lifecycle15/>
                </Route>
                <Route path="/life-cycle16" exact>
                    <Lifecycle16/>
                </Route>
                <Route path="/error-boundary">
                    <ErrorBoundary/>
                </Route>
                <Route path='/NiceModalExample'>
                    <NiceModalExample/>
                </Route>
                <Route path='/NiceModalUserInfo'>
                    <NiceModalUserInfo/>
                </Route>
                <Route path="/" component={MyRouter}></Route>

            </Switch>
        </Router>

    );
}

export default App;
