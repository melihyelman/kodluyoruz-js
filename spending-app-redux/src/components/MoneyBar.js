import React from 'react';
import { useSelector } from 'react-redux';
import { selectMoney } from '../redux/itemsSlice';

function MoneyBar() {
  const money = useSelector(selectMoney);

  return (
    <div className='money-bar'>
      {Number(money).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}
    </div>
  );
}

export default MoneyBar;
