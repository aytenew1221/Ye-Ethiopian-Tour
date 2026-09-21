//add navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/">🇪🇹 Ye Ethiopia Tour</NavLink>
        </div>

        <div>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/destinations">Destinations</NavLink>

          <NavLink to="/travel">Travel</NavLink>

          <NavLink to="/plan-trip">Plan Trip</NavLink>

          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </header>
  );
}
