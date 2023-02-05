import Pokedex from './Pokedex';
import './App.css';
import logo from './images/logotwo.png'
// import Pokegame from './Pokegame';

function App() {
  console.log(logo)
  return (
    <div className="App">
      <div className='App-logo'><img width='150px' height='150px' src={logo} alt='logo'/></div>
      <h1>POKEDEX</h1>
      <Pokedex/>
      {/* <Pokegame/> */}
    </div>
  );
}
export default App;
