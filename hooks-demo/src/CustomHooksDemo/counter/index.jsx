import React from 'react';
import useCount from "./counter";
export default ()=>{
    const {count,decrement,increment} = useCount(10)
    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
