import React from 'react'
import PropTypes from 'prop-types'
function Counter(props){
    const {value,onIncrement, onDecrement} = props
    const incrementIfOdd= ()=>{
        if(value%2===0){
            onIncrement()
        }
    }
    const incrementAsync = ()=>{
        setTimeout(()=>{
            onIncrement()
        },1000)
    }

    return (
        <>
            <div>
                <span> clicked {value} times</span>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
            <div>
                <button onClick={incrementIfOdd}>Increment if odd</button>
                <button onClick={incrementAsync}>Increment async</button>
            </div>
        </>
    )
}
Counter.propTypes={
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Counter
