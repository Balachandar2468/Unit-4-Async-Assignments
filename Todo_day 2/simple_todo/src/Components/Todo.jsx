import React from 'react'
import Todos from './Todos'
import './Todo.css'

const Todo = () => {
    const[query,Setvalue]=React.useState("")
    const[task,Settask] = React.useState([])

    const handleChange=(e)=>{
        Setvalue(e.target.value);
    }

    const handleClick =()=>{

        const payload ={
            title:query,
            id:Math.random(10),
        }

        let new_Task = [payload,...task];
        Settask(new_Task)
    };

    const delete_to_do =(index) =>{
        var new_list = task;
        new_list.splice(index,1)
        Settask([...new_list])
    }

  


  return (
    <div>
        <div id="input_box">
            <input value={query} onChange={handleChange} placeholder="Write something..."/>
            <button onClick={handleClick}>Add</button>
        </div>

        <div id='display'>
            {task.map((item,index)=>{
                return(
                    <div key={item.id}>
                        <div id='boxes'>
                        <Todos title={item.title}/>
                        <button onClick={()=>delete_to_do(index)}>Delete</button>
                        </div>
                    </div>
                )
            })}

        </div>

        

        
    </div>
  )
}

export default Todo