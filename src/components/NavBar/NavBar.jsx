import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="bg-green-500 text-white p-4 flex justify-between">
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/MyPlants" className="hover:underline">My Plants</Link></li>
        <li><Link to="/Wishlist" className="hover:underline">Wishlist</Link></li>
        <li><Link to="/PlantCare" className="hover:underline">Plant care</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;