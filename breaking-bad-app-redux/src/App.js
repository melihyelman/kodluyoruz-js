import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
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
          <Route path='/quotes' component={Quotes} />
          <Route path='/char/:id' component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
