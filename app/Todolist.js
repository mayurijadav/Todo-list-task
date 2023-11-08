import React from 'react';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <div key={i}>
            <h5>{task.title}</h5>
            <h5>{task.priority}</h5>
            <h5>{task.estimate}</h5>
            <button onClick={() => deleteTask(i)} className="delete">
              Delete
            </button>
          </div>
        ))
      ) : (
        <h2>No Task Available</h2>
      )}
    </div>
  );
};

export default TodoList;
