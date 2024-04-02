import  { useState } from 'react';

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  return (
    <div className="container mt-5">
      <h2>Liste de tâches</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ajouter une nouvelle tâche"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">Ajouter</button>
        </div>
      </form>
<ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn btn-danger" onClick={() => handleDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;