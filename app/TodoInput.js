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
          type="text"
          placeholder="Enter your priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <input
          type="text"
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
