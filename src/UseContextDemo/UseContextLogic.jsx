import React,{useContext,useState,createContext} from 'react'
const ThemeContext = createContext()
const UpdateThemeContext = createContext()
export function useTheme(){
    return useContext(ThemeContext)
}

export function useUpdateTheme(){
    return useContext(UpdateThemeContext)
}
export default function UseContextLogic({children}){
    const [theme, setTheme] = useState('dark')
    const handleSetTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <UpdateThemeContext.Provider value={handleSetTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}
