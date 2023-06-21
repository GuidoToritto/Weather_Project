import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import './App.css';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Presentation/>
      <WeatherPanel/>
     
    </div>
  );
}

export default App;
