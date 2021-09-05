import React from 'react';

function Buttons({ itemCount }) {
  return (
    <div className='items-buttons'>
      <button className='item-sell' disabled={itemCount === 0 ? true : false}>
        Sell
      </button>
      <input type='number' className='item-input' value={itemCount} />
      <button className='item-buy'>Buy</button>
    </div>
  );
}

export default Buttons;
