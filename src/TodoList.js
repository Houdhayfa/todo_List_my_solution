import React,{useState} from 'react'
import Task from './Task'
import 'bootstrap/dist/css/bootstrap.css'
import './TodoList.css'

 function TodoList() {
    const [list, setList] = useState([])
    const [input, setInput] = useState("")

    function handelSubmit(event){
       if(input!==""){
          setList((list)=>{return [...list,input]})
          event.preventDefault()
        }
      }
 
    return (
        <div id="toDoList">
        <form onSubmit={handelSubmit}>
          <label style={{display:"block",color:"#ffc107"}}>what do you want to do?</label>
            <input  value={input} onChange={(e)=>setInput(e.target.value)} type="text"></input>
            <button className="buttons  btn btn-warning addbutton">
             Add Task
            </button>
        </form>
        
        <div className={`elements ${list===[]?"hidden":"" }`}>
           <h1 style={{marginLeft:"150px"}}>Daily Tasks:</h1>
           {list.map((elem,i)=> {return <Task message={elem} key={i} />})} 
        </div> 
        </div>
    )
}

export default TodoList
