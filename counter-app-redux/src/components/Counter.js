import { useSelector } from 'react-redux';

function Counter() {
  const countValue = useSelector((state) => state.counter.value);

  return <h1>{countValue}</h1>;
}

export default Counter;
