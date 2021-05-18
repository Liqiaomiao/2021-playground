import React,{useState,useCallback} from 'react'
import List from './list'
/*
* get
* 1.useCallback 返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
* 2.不同于useMemo,传入函数返回函数的内容，useCallback 传入函数返回函数
* */
export default function UseCallBackDemo(){
    const [number,setNumber] = useState(1)
    const [theme,setTheme] = useState('dark')
    const getItems = ()=>{ // 任何更新都会重新render, 并且每次都创建新的 getItems
        return [number,number+1,number+2]
    }
    const getItemsMemo = useCallback((incrementor)=>{ // 当number改变，该函数才更新
        return [number+incrementor,number+1+incrementor,number+2+incrementor]
    },[number])
    const themeObj = {
        'dark': {
            background: '#ccc'
        },
        'light': {
            background: '#eee'
        }
    }
    return (
        <div style={themeObj[theme]}>
            <input type="number" value={number} onChange={(e)=>{
                setNumber(parseInt(e.target.value))
            }
            }/>
            <button onClick={()=>setTheme(prev=>prev==='dark'?'light':'dark')}>Toggle Theme</button>
            {
                <List getItems={getItemsMemo}/>
            }
        </div>
    )
}
