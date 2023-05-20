import React,{useState} from 'react'
import './Todolist.css'
export default function Todolist(props) {
   
    const[css,setCss]=useState(false)
  function cssChaange(){
   setCss(!css)
}

function cssChaanges(){
 
  if(!css===true){
    cssChaange()
    props.countcssmin()
  }else{
    cssChaange()
    props.countcssadd()
  }
  
  //vai used if else logic here
}
    return (
      <li className="list-item">
        
        {css? <p style={{textDecoration:'line-through'}}>{props.item}</p>: <p>{props.item}</p> }
        {/* {props.item} */}
          <span className='icons'>
          <i class="fas fa-check-circle" onClick={cssChaanges}></i>
          <i class="fa-solid fa-trash-can" 
          onClick={e=>{
              props.deleteItem(props.index)
          }}
          ></i>
          
          </span>
      </li>
    )
  }
  