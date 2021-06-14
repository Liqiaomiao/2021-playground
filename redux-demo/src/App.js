import React from 'react';
import {useSelector,useDispatch} from 'react-redux'

import './App.css';



function App() {
    const count = useSelector(state=> state.counter).count
    const dispatch = useDispatch()
    return (
        <div className='App'>
            {count}
            <button onClick={()=>{
                dispatch({
                    type:'counter/firstAction'
                })
            }}>+</button>
        </div>
    );
}

export default App;
