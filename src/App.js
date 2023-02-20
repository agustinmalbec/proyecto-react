import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <div>
      <NavBar />
      </div>
      <ItemListContainer greeting={"Sus productos"} />
    </div>
  );
}

export default App;
