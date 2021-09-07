import './App.scss';
import Card from './components/Card';
import Playground from './components/Playground';

function App() {
  return (
    <div id='app'>
      <Playground>
        <Card />
      </Playground>
    </div>
  );
}

export default App;
