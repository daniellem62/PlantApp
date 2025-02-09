import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import MyPlants from "./components/MyPlants/MyPlants.jsx";

const Wishlist = () => <h2>Wishlist</h2>;

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Use Home component here */}
          <Route path="/MyPlants" element={<MyPlants />} />
          <Route path="/Wishlist"  />
        </Routes>
      </main>
    </Router>
  );
}

export default App;