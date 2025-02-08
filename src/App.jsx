import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";

function App() {
  return (
    <div>
      <ItemListContainer greeting="Bienvenido!" />
      <NavBar />
    </div>
  );
}

export default App;
