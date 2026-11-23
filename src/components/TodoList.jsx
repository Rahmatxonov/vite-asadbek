import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  function addTodo(e) {
    e.preventDefault();
    if (input.trim() === "") return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, title: input } : todo,
        ),
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title: input,
        complated: false,
      };

      setTodos([...todos, newTodo]);
    }

    setInput("");
  }

  function complateTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complated: !todo.complated } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(todo) {
    setInput(todo.title);
    setEditId(todo.id);
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="text-center text-5xl text-blue-500 font-black">
          Todo List
        </h1>
        <form className="form">
          <div className="form-group">
            <input
              value={input}
              type="text"
              id="email"
              name="text"
              placeholder="Enter your task..."
              required=""
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button onClick={addTodo} className="form-submit-btn" type="submit">
            Add
          </button>
        </form>
      </div>

      <ul className="flex items-center flex-wrap gap-2">
        {todos.map((todo) => {
          return (
            <li className="w-[200px] h-[100px] border border-2 border-black text-center bg-amber-50">
              <span onClick={() => complateTodo(todo.id)}>{todo.title}</span>

              <div>
                <button
                  onClick={() => updateTodo(todo)}
                  className="bg-green-600 px-2 py-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-600 px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
