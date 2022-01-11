import {useState, createContext} from 'react'



interface IThemeProviderProps {
    children: any
}
const ThemeContext = createContext<any>(0)

const ThemeProvider = (props: IThemeProviderProps) => {

    const [color, setColor] = useState<string>('black');

    const toggleColor = () => {
        setColor(color === 'black' ? 'red' : "black")
    }

    const value = {
        color,
        toggleColor
    }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }