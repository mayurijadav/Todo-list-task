import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [estimate, setEstimate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addTask({ title, priority, estimate });
    setTitle('');
    setPriority('');
    setEstimate('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number" placeholder="Enter your priority" list="quantities" min="12" step="12"                                                
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      
        <input
          type="time"
          placeholder="Enter your estimate time"
          value={estimate}
          onChange={(e) => setEstimate(e.target.value)}
        />
        <button className="button">Add Task</button>
      </form>
    </div>
  );
};

export default TodoInput;
