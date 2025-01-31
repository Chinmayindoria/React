import {createContext,useContext} from 'react'


export const TodoContext = createContext(
    {
        todos : {
            id: 1,
            todo: 'HELLO',
            completed : false
        },
        addTodo : (todo) => {},
        updateTodo : (id,todo) => {},
        deleteTodo : (id) => {},
        todoToggle : (id) => {}
    }
)

export const TodoContextProvider = TodoContext.Provider

export default function useTodo(){
    return(
         useContext(TodoContext)
)
}