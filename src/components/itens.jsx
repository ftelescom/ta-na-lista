import React from 'react';

const Item = ({ item, onToggleComplete, onDeleteItem }) => {
  return (
    <div className={`lista-itens ${item.completed ? 'item-completed' : ''}`}>
      <span className="item-text">{item.name}</span>
      <div className="item-buttons">
        <button onClick={() => onToggleComplete(item.id)}>{item.completed}✅</button>
        <button onClick={() => onDeleteItem(item.id)}>❎</button>
      </div>
    </div>
  );
};

export default Item;
