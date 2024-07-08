import React, { useState } from 'react';
import AddItem from './components/addItem';
import Lista from './components/lista';
import './styles/App.css';
import logo from './assets/logo.png';

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
      <img src={logo} alt="Logo da Lista de Compras" />
      <AddItem onAddItem={addItem} />
      <Lista
        items={items}
        onToggleComplete={toggleComplete}
        onDeleteItem={deleteItem}
      />
      <button onClick={clearList} className='btnLimpar'>Limpar</button>
    </div>
  );
};

export default App;
