import './App.css';
import { useSelector } from 'react-redux';
import { selectProducts } from './redux/itemsSlice';
import Container from './components/Container';
import Item from './components/Item';
import Header from './components/Header';
import MoneyBar from './components/MoneyBar';

function App() {
  const products = useSelector(selectProducts);

  return (
    <Container>
      <Header />
      <MoneyBar />
      <div className='items'>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default App;
