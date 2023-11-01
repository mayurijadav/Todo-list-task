import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const [inputPriority, setInputPriority] = useState('');
    const [inputestimate, setInputestimate ] = useState('');


    const handleEnterPress = (e)=>{
        if(e.target===13){
            props.addList(inputText,inputPriority,inputestimate)
            setInputText("")
            setInputPriority("")
            setInputestimate("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your task"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />

      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your priority"
        value={inputPriority}
        onChange={e=>{
            setInputPriority(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />

      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your estimate time"
        value={inputestimate}
        onChange={e=>{
            setInputestimate(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
        
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText,inputPriority,inputestimate)
        setInputText("")
        setInputPriority("")
        setInputestimate("")
      }}>+</button>      
    </div>
  );
}
export default TodoInput;