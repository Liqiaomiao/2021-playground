import React, {useState, useMemo} from 'react'

function slowFunction(number) {
    console.log('call slow function');
    for (let i = 0; i <= 1000000; i++) {
    }
    return number * 2
}

export default function () {
    const [number, setNumber] = useState(0)
    const [theme, setTheme] = useState('dark')
    const doubleNumber = () => slowFunction(number)
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
