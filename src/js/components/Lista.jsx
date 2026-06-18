import React, { useState } from 'react';
import '../../styles/index.css';

const Lista = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (e.key === 'Enter' && task.trim() !== "") {
      setTasks([...tasks, { text: task, id: Date.now() }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="title">todos</h1>
      <div className="card">
        <input
          className="todo-input"
          placeholder="Lista"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={addTask}
        />
        <ul className="todo-list">
          {tasks.map((t) => (
            <li key={t.id} className="todo-item">
              {t.text}
              <button className="delete-btn" onClick={() => deleteTask(t.id)}>×</button>
            </li>
          ))}
        </ul>
        <div className="footer">{tasks.length} item left</div>
      </div>
    </div>
  );
};

export default Lista;