import React from 'react'
import UseContextLogic,{useTheme,useUpdateTheme} from './UseContextLogic'

const themes = {
    light: {
        width: '200px',
        background: "#eeeeee"
    },
    dark: {
        width: '200px',
        background: "#ccc"
    }
};

function GrandChildComponentUseHooks() {
    const theme = useTheme()
    const handleToggle = useUpdateTheme()
    return (
        <div>
            <div>The theme is {theme}</div>
            <button onClick={handleToggle}>click change</button>
            <div style={themes[theme]}>
                function component
            </div>
        </div>
    )
}

export default function UseContextDemo() {
    return (
        <UseContextLogic>
            <GrandChildComponentUseHooks/>
        </UseContextLogic>
    )
}
