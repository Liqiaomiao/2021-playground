import {useState, useRef, useEffect, forwardRef} from 'react'
import Lifecycle15 from "./components/lifecycle/lifecycle15";
import Lifecycle16 from "./components/lifecycle/lifecycle16";
import ErrorBoundary from './components/ErrorBoundary';
import NiceModalExample from './components/NiceMoal/NiceModalExample'
import NiceModalUserInfo from './components/NiceMoal/UsersLayout'
import MyRouter from "./components/RouterDemo/MyRouter";
import NestedRouting from './components/RouterDemo/NestedRouting'
import Tabspage from './components/RouterDemo/Tabspage'
import RouterAuth from './components/RouterDemo/RouterAuth'
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
                        <Link to='/MyRouter'>MyRouter</Link>
                    </li>
                    <li>
                        <Link to='/NestedRouting'>NestedRouting</Link>
                    </li>
                    <li>
                        <Link to='/Tabspage'>Tabspage</Link>
                    </li>
                    <li>
                        <Link to='/RouterAuth'>RouterAuth</Link>
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
                <Route path="/MyRouter" component={MyRouter}></Route>
                <Route path='/NestedRouting'>
                    <NestedRouting/>
                </Route>
                <Route path='/Tabspage/:activeTab?'>
                    <Tabspage/>
                </Route>
                <Route path='/RouterAuth'>
                    <RouterAuth/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
