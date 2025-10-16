import React, { useState, useEffect } from "react";


export default function Todo() {
  const currentUser = localStorage.getItem("currentUser");
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Load todos for this user
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(`todos_${currentUser}`)) || [];
    setTodos(savedTodos);
  }, [currentUser]);

  const addTodo = () => {
    if (!task) return;
    const newTodos = [...todos, task];
    setTodos(newTodos);
    localStorage.setItem(`todos_${currentUser}`, JSON.stringify(newTodos));
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem(`todos_${currentUser}`, JSON.stringify(newTodos));
  };

  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h2>{currentUser}'s Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {todos.map((t, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            {t}{" "}
            <button onClick={() => deleteTodo(i)} style={{ marginLeft: "0.5rem" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
