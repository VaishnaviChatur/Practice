import React,{useState} from 'react'
import './Main.css'
import Todoinput from '../molucules/Todoinput'
import Todolist from '../molucules/Todolist'

export default function Main() {
    const [count, setCount] = useState(0)
    const [listTodo,setListTodo]=useState([]);
   
    let addList = (inputText)=>{
      if(inputText!==''){
        setListTodo([...listTodo,inputText]);
        // setCount(count+1)
        countSetadd()
    }
  
    //strik through hone pe buttton 
        
    }
    function countSetmin(){
      if(count>0)
      setCount(count-1)
    }

    function countSetadd(){
     
      setCount(count+1)
    }
    const deleteListItem = (key)=>{
      let newListTodo = [...listTodo];
      newListTodo.splice(key,1)
      setListTodo([...newListTodo])
     countSetmin();
    
    }
   
  // const pendingtasks =addList.filter((todo) => !todo.completed).length
    return (
      <> <h1 className='text-heading'>To Do List</h1>
      <div className="main-container">
   
        <div className="center-container">
        <h1 className="app-heading">Pending List ({count}) </h1>
        
          <hr></hr>
          {listTodo.map((listItem,i)=>{
            return (
              <>
             <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}  countcssadd={countSetadd} countcssmin={countSetmin} primary={false}/>
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
  