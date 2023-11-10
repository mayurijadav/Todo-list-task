"use client"
import React, { useState } from 'react';
import TodoInput from './TodoInput.js';
import Todolist from './Todolist';

const Page = () => {
  const [main, setMain] = useState([]);

  const addTask = (task) => {
    setMain([...main, task]);
  };

  const deleteTask = (i) => {
    let copyTask = [...main];
    copyTask.splice(i, 1);
    setMain(copyTask);
  };

  return (
    <>
      <h1 className="header">todolist</h1>
      <TodoInput addTask={addTask} />
      <hr />
      <div className="render">
        <ul className="render1">
          <Todolist tasks={main} deleteTask={deleteTask} />
        </ul>
      </div>
    </>
  );
};

export default Page;


