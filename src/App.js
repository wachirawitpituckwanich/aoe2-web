import Carditem from './components/card'
import Searchbar from './components/Searchbar'
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>AOE2 Civilization data</h1>
      </div>
      <Searchbar/>
      <div className="card-ctn">
      <Carditem/>
      </div>        
    </div>
  );
}

export default App;
