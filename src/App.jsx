import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
//import PlantCard from './components/PlantCard/PlantCard.jsx'

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://perenual.com/api/species-list?key=sk-7S5M679b6bd4db7498444`
        );
        setPlants(response.data[0]); // This will set only the first result
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Search />
    </>
  );
}

//<PlantCard data={plants}/>
export default App;
