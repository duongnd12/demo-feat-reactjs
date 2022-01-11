import { SET_TODO_INPUT, ADD_TODO, EDIT_TODO, DELETE_TODO } from './constants'

export const setTodoInput = (payload: string) => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = (payload: string) => ({
    type: ADD_TODO,
    payload
})

export const editTodo = (payload: string) => ({
    type: EDIT_TODO,
    payload
})
export const deleteTodo = (payload: string) => ({
    type: DELETE_TODO,
    payload
})