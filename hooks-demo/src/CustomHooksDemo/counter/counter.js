import {useState} from 'react'
const useCounter = (bycount=1)=>{
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count+bycount)
    }
    const decrement = ()=>{
        setCount(count-bycount)
    }
    return {
        count,increment,decrement
    }
}
export default useCounter
