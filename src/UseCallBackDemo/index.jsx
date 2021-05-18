import React,{useState} from 'react'
import List from './list'
export default function UseCallBackDemo(){
    const [number,setNumber] = useState(1)
    const [theme,setTheme] = useState('dark')
    const getItems = ()=>{ // 任何更新都会重新render, 并且每次都创建新的 getItems
        return [number,number+1,number+2]
    }
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
                <List getItems={getItems}/>
            }
        </div>
    )
}
