import React,{useState} from 'react'
import './Task.css'
import 'bootstrap/dist/css/bootstrap.css'


function Task(props) {
   const [content,setContent]=useState(props.message)
   const [isShown,setIsShown]=useState(false)
   const [isDisplayed,setIsDisplayed]=useState(true)
    const handelChange=(event)=>{
      console.log(props)
      setContent(event.target.value)
    }
    const handelSubmit=(event)=>{
      setIsShown(false)
      event.preventDefault()
    }
    const handelForm=(e)=>{
      setIsShown(true)
    }
    const handelTask=(e)=>{
      setIsDisplayed(false)
    }
    return (
      
        <div  className={`task  ${isDisplayed? "true" : "hidden"}`}>
          <p className="taskName">{content}</p>
          <div className="taskButtons">
          <button className=" buttons btn btn-warning" onClick={handelTask}>Delete</button>
          <button className=" buttons btn btn-warning" onClick={handelForm}>Edit</button>
          </div> 
          <form id={isShown? "":"EditForm"} onSubmit={handelSubmit}>
            <input type="text" value={content} onChange={handelChange}></input>
            <button className=" buttons btn btn-warning">Apply</button>
          </form>
        </div>
        
    )
}

export default Task
