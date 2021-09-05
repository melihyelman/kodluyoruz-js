import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../redux/itemsSlice';

function Receipt() {
  const products = useSelector(selectProducts);
  const filtered = products.filter((product) => product.count > 0);
  const total = filtered.reduce(
    (acc, current) => acc + current.price * current.count,
    0
  );
  console.log(total);
  return (
    <>
      {filtered.length > 0 && (
        <div className='receipt'>
          <div className='receipt-header'>Your Receipt</div>
          {filtered.map((product) => (
            <div className='receipt-items'>
              <div className='receipt-item-name'>{product.title}</div>
              <div className='receipt-item-count'>x{product.count}</div>
              <div className='receipt-item-price'>
                {product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </div>
            </div>
          ))}

          <div className='receipt-total'>
            <span>Total</span>

            <div className='receipt-total-money'>
              {total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Receipt;
