import React,{useEffect,useState} from 'react'
export default (props)=>{
    const [count,setCount] = useState(0)
    const [obj] = useState({
        name : 'lisa'
    })
    // const obj = {
    //     name : 'lisa'
    // }
    const handleClick = ()=>setCount(count+1)

    useEffect(()=>{
        handleClick()
    },[obj])

    return (
        <>
            {count}
            <button onClick={handleClick}>click</button>
        </>
    )
}
