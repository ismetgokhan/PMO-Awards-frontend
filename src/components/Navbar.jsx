import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">PMO Awards 2026</h2>
        <nav className="navbar-links">
          <NavLink to="/" end> Anasayfa </NavLink>
          <NavLink to="/participants"> Katılımcılar </NavLink>
          <NavLink to="/jury"> Jüri </NavLink>
          <NavLink to="/history2025"> 2025 Özeti </NavLink>
          <NavLink to="/volunteers" style={{ color: "white" }}>Gönüllülerimiz</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
