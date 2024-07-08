import React, { useState } from 'react';
import AddItem from './components/addItem'; // Certifique-se de que "addItem" é exatamente como o nome do arquivo.
import Lista from './components/lista';     // Certifique-se de que "lista" é exatamente como o nome do arquivo.
import './styles/App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      completed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const toggleComplete = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <h1>Lista de Compras</h1>
      <AddItem onAddItem={addItem} />
      <Lista
        items={items}
        onToggleComplete={toggleComplete}
        onDeleteItem={deleteItem}
      />
      <button onClick={clearList}>Limpar</button>
    </div>
  );
};

export default App;
