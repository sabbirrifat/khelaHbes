import React, { useState } from 'react';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Todo App</h2>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l py-2 px-4"
            placeholder="Add a new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-r"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-300 py-2"
            >
              <span>{todo}</span>
              <button
                className="text-pink-500 hover:text-pink-600"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
