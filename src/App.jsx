import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import PlantCard from './components/PlantCard/PlantCard.jsx'
import { plantData } from "./assets/data.js";
import Footer from "./components/Footer/Footer.jsx";
import Filter from "./components/Filter/Filter.jsx";


function App() {
  const [plants, setPlants] = useState(plantData); // All plants (initial data)
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [filter, setFilter] = useState("");
  
  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query with the submitted value
  };

  function handleFilterChange(value) {
    setFilter(value);
  }

  // Filter plants based on searchQuery
  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.common_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter ? plant.sunlight === filter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} /> {/* Correct prop name */}
      <Filter handleFilterChange={handleFilterChange} filter={filter} /> {/* Correct prop names */}
      <h1>Plant Information</h1>
      <PlantCard plants={filteredPlants} /> {/* Use filteredPlants */}
      <Footer/>
    </div>
  );
}

export default App;