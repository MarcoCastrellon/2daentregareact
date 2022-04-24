import './App.css';
import Carrito from './Components/Carrito';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className=''>

      <NavBar> 
        <Carrito/>
      </NavBar>
      <ItemListContainer/>

    </div>
  )
}

export default App;
