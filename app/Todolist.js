import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="abc" 
        onClick={e=>{
            props.item()
        }}></i>
        </span>
    </li>
  )
}

export default Todolist