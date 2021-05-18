import React, {useState, useMemo, useEffect} from 'react'
/*
* get
*  有助于避免在每次渲染时都进行高开销的计算：useMemo 传入创建函数和依赖函数项，它仅会在某个依赖项改变时才重新计算memoized值；
*  scenarios ：you actually need the performance benefits when the function you're calling is incredibly slow
* */
function slowFunction(number) {
    console.log('call slow function');
    for (let i = 0; i <= 1000000; i++) {
    }
    return number * 2
}

export default function () {
    const [number, setNumber] = useState(0)
    const [theme, setTheme] = useState('dark')
    const themeObj = {
        background: theme === 'dark'?'#ccc':'#eee'
    }
    const doubleNumber = () => useMemo(()=>slowFunction(number),[number])
    return (
        <div>
            <input type="number" onChange={(e) => {
                setNumber(parseInt(e.target.value.trim() === '' ? 0 : e.target.value.trim()))
            }
            }/>
            {theme}
            <button onClick={() => setTheme((prev) => prev === 'dark' ? 'light' : 'dark')}>change theme</button>
            <div>{doubleNumber(number)}</div>
        </div>
    )
}
