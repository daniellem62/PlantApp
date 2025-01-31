import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import PlantCard from "./components/PlantCard/PlantCard.jsx";
import { plantData } from "./assets/data.js";
import Footer from "./components/Footer/Footer.jsx";

import SuggestedPlants from "./components/SuggestedPlants/SuggestedPlants.jsx";

import Filter from "./components/Filter/Filter.jsx";

function App() {
  const [plants, setPlants] = useState(plantData); // All plants (initial data)
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [selectedPlant, setSelectedPlant] = useState(null); // Selected plant state
  const [filter, setFilter] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query with the submitted value
    setSelectedPlant(null); // Reset the selected plant when searching
  };

  const handleSelectPlant = (plant) => {
    setSelectedPlant(plant); // Update the selected plant state
  };

  // Filter plants based on searchQuery
  // const filteredPlants = plants.filter((plant) =>
  //   plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  function handleFilterChange(value) {
    setFilter(value);
  }

  const handleResetFilters = () => {
    setSearchQuery(""); // Reset search query
    setFilter(""); // Reset filter to show all plants
    setSelectedPlant(null); // Clear the selected plant
  };

  // Filter plants based on searchQuery
  const filteredPlants = selectedPlant
    ? [selectedPlant]
    : plants.filter((plant) => {
        const matchesSearch = plant.common_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesFilter = filter ? plant.sunlight === filter : true;
        return matchesSearch && matchesFilter;
      });

  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} /> {/* Correct prop name */}
      <SuggestedPlants plants={plants} onSelectPlant={handleSelectPlant} />{" "}
      {/* Pass all plants */}
      <Filter handleFilterChange={handleFilterChange} filter={filter} />{" "}
      <button onClick={handleResetFilters} style={{ padding: "10px", marginTop: "0px" }}>
        Show All
      </button>
      {/* Correct prop names */}
      <h1>Plant Information</h1>
      <PlantCard plants={filteredPlants} /> {/* Use filteredPlants */}
      <Footer />
    </div>
  );
}

export default App;
