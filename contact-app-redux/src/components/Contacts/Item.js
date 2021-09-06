import React from 'react';

function Item({ item }) {
  return (
    <li>
      <span>{item.name} </span>
      <span>{item.number} </span>
    </li>
  );
}

export default Item;
