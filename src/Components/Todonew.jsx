import React, { useEffect, useState } from "react";

const Todonew = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const handleAdd = () => {
    const task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodo([...todo, task]);
  };

  useEffect(() => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };
  const handleCompleted = (id) => {
    setTodo(
      todo.map((task) =>
        task.id == id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const todoFilter = todo
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;

      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-20">
      <div className="flex  gap-10">
        <input
          type="text"
          placeholder="Add your task ...."
          className="border border-gray-400  p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white cursor-pointer"
          onClick={() => handleAdd()}
        >
          Add
        </button>
        <select
          name=""
          id=""
          className="border p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <input
          type="text"
          placeholder="Search ..."
          className="border px-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {todoFilter.map((task) => (
          <div className="border mt-2 p-3 flex justify-between gap-2">
            <p className={`flex-1 ${task.completed ? "line-through" : ""}`}>
              {task.text}
            </p>
            <button
              className="bg-red-500 px-3 text-white cursor-pointer"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
            <button
              className="bg-green-500 px-3 text-white cursor-pointer"
              onClick={() => handleCompleted(task.id)}
            >
              {task.completed ? "Undo" : "Completed"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todonew;
