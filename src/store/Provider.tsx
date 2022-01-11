import { useReducer } from 'react'
import Context from "./Context";
import logger from './logger';
import reducer , {initState} from './reducer'

interface IProviderProps {
    children: any
}

const Provider = ( props: IProviderProps ) => {
    const [state, dispatch] = useReducer<any>(logger(reducer), initState)
    
    return(
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider