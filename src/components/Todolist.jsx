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
      <form
        className="input-group mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter a new task..." 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      <ul className="list-group">
        {todoList.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {todoList.length > 1 && (
        <div className="mt-3 text-end">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => setTodoList([])}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Todolist;
