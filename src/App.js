import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import './App.css';
import Presentation from './components/Presentation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Presentation/>
      <WeatherPanel/>
      <Footer/>
    </div>
  );
}

export default App;
