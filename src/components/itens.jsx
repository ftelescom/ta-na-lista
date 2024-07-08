import React from 'react';

const Item = ({ item, onToggleComplete, onDeleteItem }) => {
  return (
    <div className="shopping-item">
      <span>{item.name}</span>
      <button onClick={() => onToggleComplete(item.id)}>
        {item.completed ? '✔️' : '✅'}
      </button>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </div>
  );
};

export default Item;
