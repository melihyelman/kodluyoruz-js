import React from 'react';
import Buttons from './Buttons';

function Item({ product }) {
  return (
    <div className='item'>
      <img src={product.img} alt={product.title} className='item-img' />
      <div className='item-title'>{product.title}</div>
      <div className='item-price'>
        {Number(product.price).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </div>
      <Buttons itemCount={product.count} />
    </div>
  );
}

export default Item;
