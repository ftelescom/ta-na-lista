import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="5X MASSA PENNE MILANEZA 500G"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddItem;
