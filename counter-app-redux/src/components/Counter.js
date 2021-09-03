import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementByAmount,
  decrement,
} from '../redux/counter/counterSlice';

function Counter() {
  const [amount, setAmount] = useState(1);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <input
        type='number'
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by amount
      </button>
    </div>
  );
}

export default Counter;
