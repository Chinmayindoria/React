import {useState,useEffect} from 'react'
import './App.css'
import { TodoContextProvider } from './Context/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItems'

function App() {
  const [todos , setTodo] = useState([])
  function addTodo(todo){
    setTodo((prev) => [{id: Date.now(),...todo},...prev])
    return
  }
  function updateTodo(id,todo){
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  function deleteTodo(id){
    setTodo((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  // function deleteTodo(id){
  //   setTodo((prev) => prev.map((prevtodo) =>{
  //     if(prevtodo.id === id){
  //       let i = prev.indexOf(prevtodo)
  //       console.log(prev)
  //       const newPrev = prev.splice(i,1)
  //       console.log(newPrev)
  //       return newPrev
  //     }
  //   }))
  // }

  function todoToggle(id){
    setTodo((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo,completed :!prevTodo.completed} : prevTodo )) )
  }


  useEffect(()=> {
  let todos = localStorage.getItem("todos")
  if(todos && todos.length>0){
    setTodo(JSON.parse(todos))
  }
    
  },[])
   
  useEffect(() => {
    localStorage.setItem("todos" ,JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value = {{addTodo,updateTodo,deleteTodo,todoToggle}}>
     <h1 className='bg-slate-700'>Hello</h1>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                        todos.map((todos , index)=> {
                          console.log(index)
                              return (
                           
                           <div className ='w-full' 
                          //  key = {todos.id}
                           >
                            <TodoItem todos = {todos} i = {index}/>
                            </div>
                            )
                            
                          })}
                
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
