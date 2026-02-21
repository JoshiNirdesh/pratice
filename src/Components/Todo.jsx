import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const handleAdd = () => {
    const task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodo([...todo, task]);
  };
  const handleDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  const handleCompleted = (id) => {
    setTodo(
      todo.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const todoFilter = todo.filter((task)=>{
    if(filter === "completed") return task.completed;
    if(filter === "pending") return !task.completed;
    return true
  })
  console.log(todo);
  return (
    <div className="m-20 p-20">
      <div>
        <input
          type="text"
          placeholder="Add a task ....."
          className="border border-gray-400 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 p-2 ml-10 text-white"
          onClick={() => handleAdd()}
        >
          Add
        </button>
        <select
          name="All"
          id=""
          className="border ml-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {todoFilter.map((task) => (
        <div className="flex items-center">
          <p className={`flex-1 ${task.completed ? "line-through" : ""}`}>
            {task.text}
          </p>
          <button
            className="bg-red-500 p-2 ml-10 text-white"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
          <button
            className="bg-green-500 p-2 ml-10 text-white"
            onClick={() => handleCompleted(task.id)}
          >
            Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
