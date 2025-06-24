import "./App.css";
import Widget from './components/Widget';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <Widget/>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <Card/>
        </div>
      </main>
    </div>
  );
}

export default App;
