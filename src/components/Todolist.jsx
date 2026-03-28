import React, { useState } from 'react';

const Todolist = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask(""); // Clear input
    }
  };

  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="todo-container" style={{ padding: '20px', maxWidth: '400px' }}>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter a new task..." 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>Add</button>
      </div>

      <ul className="list-group">
        {todoList.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;