import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/char/:id' component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
