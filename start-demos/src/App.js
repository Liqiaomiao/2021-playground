import {useState} from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
function Profile(props){
    return (
        <div>
            {props.user.name}
        </div>
    )
}
function App() {
    const [user, setUser] = useState({
        name: 'dog'
    })

    return (
        <div className='App'>
            <ErrorBoundary>
                <div>
                    <Profile user={user}></Profile>
                </div>
            </ErrorBoundary>
            <button onClick={()=>setUser(null)}>click</button>
        </div>
    );
}

export default App;
