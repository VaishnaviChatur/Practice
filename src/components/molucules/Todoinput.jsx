import React, {useState} from 'react'
import './Todoinput.css'
export default function Todoinput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }

  return (
    <div className="input-container">
      <input
      
        type="text"
        className="input-box-todo"
        placeholder="Add a new task"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
      
        setInputText("")
      }}>Add</button>      
    </div>
  );
}