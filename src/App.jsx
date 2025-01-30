import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import PlantCard from './components/PlantCard/PlantCard.jsx'
import { plantData } from "./assets/data.js";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [plants, setPlants] = useState(plantData); // All plants (initial data)
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  
  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query with the submitted value
  };

  // Filter plants based on searchQuery
  const filteredPlants = plants.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} /> {/* Correct prop name */}
      <h1>Plant Information</h1>
      <PlantCard plants={filteredPlants} /> {/* Use filteredPlants */}
      <Footer/>
    </div>
  );
}

export default App;