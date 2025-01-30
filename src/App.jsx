import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import PlantCard from './components/PlantCard/PlantCard.jsx'
import { plantData  } from "./assets/data.js";

function App() {
  const [plants, setPlants] = useState(plantData);

  
return (
    <div>
      <Header />
      <Search />
      <h1>Plant Information</h1>
      <PlantCard plants={plants}/>
    </div>
);
}


export default App;
