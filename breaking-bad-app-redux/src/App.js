import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Characters</Link>
            </li>
            <li>
              <Link to='/quotes'>Quotes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/quotes' exact component={Quotes} />
          <Route path='/char/:id' component={Detail} />
          <Route path='/quotes/:id' component={QuoteDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
