import React,{useState} from 'react'
//import './App.css';



const Counter = () => {
    const [count,setCount]=React.useState(0);

    const handleincrement =(value) =>{
        setCount(count+value)
    }

    const handledecrement =(value) =>{
        setCount(count-value)
    }

    const handledouble =(value) =>{
        setCount(count*value)
    }

   
    
      return (
        <>
        <div>
            <h2 id='title'>Counter:{count}</h2>
            <div id='buttons'>
            <button onClick={()=>handleincrement(1)}>Increment</button>
            <button onClick={()=>handledouble(2)}>Double</button>
            <button onClick={()=>handledecrement(1)}>Decrement</button>
            </div>
    
        </div>
        </>
      )
    }

export default Counter