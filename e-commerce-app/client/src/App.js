import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id='content'>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/signin' component={Signin}></Route>
            <Route path='/signup' component={Signup}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
