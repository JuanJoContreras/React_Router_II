import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="d-flex justify-content-between px-5"  variant="light"  style={{ background: "rgb(44 77 143)" }} >
      <Navbar.Brand>
        <img
          width="100"
          //src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          src="https://i.pinimg.com/originals/40/c1/4e/40c14e954cc2f64ee555ab3ed8d4c4ac.jpg"          
          alt=""
        />
      </Navbar.Brand>
      <div className="d-flex links">
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/">  Home      </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)}to="/pokemones"> {" "} Pokemones{" "}  </NavLink>
      </div>
    </Navbar>
  );
};

export default NavBar;