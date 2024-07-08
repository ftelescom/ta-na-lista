import React from 'react';
import Item from 'itens';

const Lista = ({ items, onToggleComplete, onDeleteItem }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onToggleComplete={onToggleComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default Lista;
