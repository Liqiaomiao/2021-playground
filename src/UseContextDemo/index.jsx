import React, {useContext, createContext, useState,Component} from 'react'
/*
* get
* 作用: 用来处理多层传递数据的方式，以前可以通过层层传递props和class component的 createContext 方式
* 使用方式
*   1. yourcontext.Provider : 用于包括需要访问上下文信息的所有组件
*      即你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context
*   2. value : your context value
*   3. Class component: yourcontext.Consumer  + function (contextvalue)=>{return render}
*   4. contextvalue = useContext(yourcontext)
* */
const ThemeContext = createContext()
const themeSkin = {
    light: {
        background: '#eee',
        width: '200px'
    },
    dark: {
        background: '#ccc',
        width: '200px'
    }
}

function FunctionComponent() {
    const theme = useContext(ThemeContext)
    return (
        <div style={themeSkin[theme]}>
            FunctionComponent
        </div>
    )
}
class ClassComponent extends Component{
    render(){
        return (
            <ThemeContext.Consumer>
                {
                    (theme) => <div style={themeSkin[theme]}> ClassComponent</div>
                }
           </ThemeContext.Consumer>
        )
    }
}
export default function UseContextDemo(){
    const [theme,setTheme] = useState('dark')
    const handleClick=()=>{
        setTheme((prev)=>prev === 'dark'?'light':'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={handleClick}>change theme</button>
            <FunctionComponent/>
            <ClassComponent/>
        </ThemeContext.Provider>
    )
}
