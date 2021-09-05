import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, selectMoney } from '../redux/itemsSlice';

function Buttons({ itemCount, itemId, itemPrice }) {
  const money = useSelector(selectMoney);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleChange = () => {
    if (itemPrice * count <= money) {
      dispatch(changeCount({ id: itemId, count }));
    } else {
      setCount(Math.floor(money / itemPrice));
    }
  };

  useEffect(() => {
    handleChange();
  }, [count]);

  return (
    <div className='items-buttons'>
      <button
        className='item-sell'
        disabled={itemCount === 0 ? true : false}
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        Sell
      </button>
      <input
        type='number'
        min='0'
        className='item-input'
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button
        className='item-buy'
        disabled={itemPrice > money ? true : false}
        onClick={() => setCount(count + 1)}
      >
        Buy
      </button>
    </div>
  );
}

export default Buttons;
