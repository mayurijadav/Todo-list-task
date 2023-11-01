"use client"
import Image from 'next/image'
import TodoInputt from './TodoInput';
import { useState } from 'react';
import Todolist from './Todolist';

function Home() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText,inputPriority,inputestimate)=>{
    if(inputPriority,inputText!=='')
      setListTodo([...listTodo,inputText,inputPriority,inputestimate]);
  }
  
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInputt addList={addList}/>
        <h1 className="app-heading">TODO LIST</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} />
          )
        })}
      </div>
    </div>
  )
}
export default Home;