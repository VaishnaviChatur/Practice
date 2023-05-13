import React,{useState} from 'react'
import './Main.css'
import Todoinput from '../molucules/Todoinput'
import Todolist from '../molucules/Todolist'
export default function Main() {
    const [listTodo,setListTodo]=useState([]);
    let addList = (inputText)=>{
      if(inputText!==''){
        
        setListTodo([...listTodo,inputText]);
    }
  
        
    }
    const deleteListItem = (key)=>{
      let newListTodo = [...listTodo];
      newListTodo.splice(key,1)
    
      setListTodo([...newListTodo])
  
    }
    
  
    return (
      <> <h1 className='text-heading'>To Do List</h1>
      <div className="main-container">
      
        <div className="center-container">
        <h1 className="app-heading">Pending List ({listTodo.length}) </h1>
         
          <hr></hr>
          {listTodo.map((listItem,i)=>{
            return (
              <>
              <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          </>
              )
          })}
         <hr />
         <Todoinput addList={addList}/>
         
        </div>
      </div>
    
      </>
    )
  }
  