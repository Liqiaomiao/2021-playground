import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Counter from './features/counter-with-toolkit/index'
import {increment,decrement,incrementByAmount} from './features/counter-with-toolkit/counter'
import './App.css';

function App() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div className='App'>
            <header className='App-header'>
                <Counter/>
            </header>
        </div>
    );
}

export default App;
