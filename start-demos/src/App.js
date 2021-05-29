import {useState, useRef, useEffect, forwardRef} from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary'
import CustomTextInput from './components/Refs/CustomTextInput'
import ForwardRefDemo from './components/Refs/ForwardRefDemo'
function Profile(props) {
    return (
        <>
            {props.user.name}
        </>
    )
}

function App() {
    const [user, setUser] = useState({
        name: 'dog'
    })
    const reactEelmentRef = useRef() // 可以在函数组件内部使用ref
    const divEelmentRef = useRef()
    useEffect(()=>{
        reactEelmentRef.current.textInput.current.select()
        console.log('divEelmentRef',divEelmentRef.current);
    },[])
    return (
        <div className='App'>
            <ErrorBoundary>
                <div className='user-container'>
                    <Profile user={user}></Profile>
                    <button onClick={() => setUser(null)}>click</button>
                </div>
                <CustomTextInput ref={reactEelmentRef} divEelmentRef={divEelmentRef}/>
            </ErrorBoundary>

        </div>
    );
}

export default App;
