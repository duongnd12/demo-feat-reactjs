import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from './constants'

export const initState = {
    todos: [],
    todoInput: ''
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
            case DELETE_TODO:
                const newTodo = [...state.todos]
                newTodo.splice(action.payload, 1)
                return{
                    todos: newTodo
                }
            case EDIT_TODO:
                    return {
                    }
                default:
            throw new Error ('Invalid action.')
    }
}

export default reducer