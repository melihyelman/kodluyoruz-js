import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id='content'>
          <Switch>
            <Route path='/' exact component={Products}></Route>
            <Route path='/product/:productId'  component={ProductDetail}></Route>
            <Route path='/signin' component={Signin}></Route>
            <Route path='/signup' component={Signup}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
