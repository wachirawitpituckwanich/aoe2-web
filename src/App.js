import Searchbar from './components/Searchbar'
import FadeIn from 'react-fade-in';
import './App.css';
const App = () => {
  return (
    <FadeIn>
    <div className="App">
      <div className="header">
      <h1>AOE2 Civilization data</h1>
      </div>
      <Searchbar/>    
    </div>
    </FadeIn>
  );
}

export default App;
