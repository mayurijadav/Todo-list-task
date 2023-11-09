import React from 'react';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Estimate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, i) => (
              <tr key={i}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.estimate}</td>
                <td>
                  <button onClick={() => deleteTask(i)} className="delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="4">
                <h2>No Task Available</h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
