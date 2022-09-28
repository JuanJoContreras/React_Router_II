import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container className="justify-content">          
          <Link to="/" className="text-white ms-3 text-decoration-none">
          🗺 Home
          </Link>          
          <Link to="/pokemones" className="text-white ms-3 text-decoration-none">
          Pokemones
          </Link>
        </Container>
      </Navbar>
    </>
  );
}