import { Container } from "react-bootstrap";
import Pokemones from "../components/Pokemones";

export default () => {
  return (
    <Container className="text-center pt-5">
    <h1 className="mb-4">Selecciona un Pokemón</h1>
    <Pokemones />
  </Container>
  )
}