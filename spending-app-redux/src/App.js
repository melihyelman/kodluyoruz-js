import './App.css';
import { useSelector } from 'react-redux';
import { selectProducts } from './redux/itemsSlice';
import Container from './components/Container';

function App() {
  const products = useSelector(selectProducts);

  console.log(products);
  return (
    <Container>
      <p>x</p>
    </Container>
  );
}

export default App;
