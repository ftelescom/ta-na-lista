import React from 'react';

const Item = ({ item, onToggleComplete, onDeleteItem }) => {
  return (
    <div className={`listaItens ${item.completed ? 'itemCheck' : ''}`}>
      <span className="textoItens">{item.name}</span>
      <div className="btnsItens">
        <button onClick={() => onToggleComplete(item.id)} className='btnCheck'>{item.completed}JÁ ESTÁ!</button>
        <button onClick={() => onDeleteItem(item.id)} className='btnRemover'>REMOVER</button>
      </div>
    </div>
  );
};

export default Item;
