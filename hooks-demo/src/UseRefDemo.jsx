import React,{useState,useRef,useEffect} from 'react'
/*
*get
* 1. 作用：方便地保存任何可变值-衍生作用：便于访问dom、便于访问上一次的数据，并且不会导致重新渲染
* 2. useRef 返回的 ref 对象在组件的整个生命周期内保持不变; useRef 会在每次渲染时返回同一个 ref 对象
* 3. 当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染
* 4. ref 为访问DOM的主要方式，但是 useRef 比 React.createRef()更实用，它可以很方便地保存任何可变值，
*    其类似于在 class 中使用实例字段的方式
* 5. 避免滥用，比如通过useRef对dom进行增删，这样会导致真实DOM和React虚拟DOM之间的不一致
* 6. 可用于存储组件之前的数据
*  */
export default function App(){
    const [name,setName] = useState('')
    const renderCount = useRef(0)
    const previousName = useRef('')
    const inputEle = useRef(null)
    /*const [renderCount,setRenderCount] = useState(0)
    useEffect(()=>{ // 导致循环渲染
        setRenderCount(prev=>prev+1)
    })*/
    useEffect(() => {
        console.log('change');
        renderCount.current = renderCount.current + 1
        previousName.current = name
    },[name])
    const handleFocuse = () => {
        inputEle.current.focus()
    }
    return (
        <>
            <input ref={inputEle} type="text" valuue={name} onChange={e=>setName(e.target.value)}/>
            <div>
                My name is {name}
            </div>
            <div>it used to be {previousName.current}</div>
            <div>
                I  rendered {renderCount.current} times
            </div>
            <button onClick={handleFocuse}>input focus</button>
        </>
    )
}
