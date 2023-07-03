import './App.css';
import Game from "./Components/Game";

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10}/>
    </div>
  );
}

export default App;
