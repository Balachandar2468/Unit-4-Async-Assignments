import React from 'react'
import TodoList from './todoList'

const Todo = () => {

  const[query,setQuery] = React.useState("")

  const HandleChange = (e) =>{
    setQuery(e.target.value)
  }
  
  

  return (
    <div>
      <div> 
        <input value={query} onChange={HandleChange} placeholder="Write something.."/> 
        <button onClick={()=>{
          console.log(query)
          setQuery(" ")
        }}>Add</button>
        </div>
     </div>
    
  )
}

export default Todo