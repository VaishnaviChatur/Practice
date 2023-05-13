import React,{useState} from 'react'
import './Todolist.css'
export default function Todolist(props) {
   
    const[css,setCss]=useState(false)
  function cssChaange(){
   setCss(!css)
}
    return (
      <li className="list-item">
        {css? <p style={{textDecoration:'line-through'}}>{props.item}</p>: <p>{props.item}</p> }
          <span className='icons'>
          <i class="fas fa-check-circle" onClick={cssChaange} ></i>
          <i class="fa-solid fa-trash-can" 
          onClick={e=>{
              props.deleteItem(props.index)
          }}
          ></i>
          
          </span>
      </li>
    )
  }
  