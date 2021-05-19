import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement,incrementByAmount} from './features/counter-with-toolkit/counter'
import './App.css';

function App() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>The count is:{count} </h1>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <button onClick={()=>dispatch(incrementByAmount(5))}>add by amount</button>
            </header>
        </div>
    );
}

export default App;
