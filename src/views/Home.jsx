import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Bienvenido maestro Pokemón </h1>
      <img
          height="400px"
         // src="https://gifimage.net/wp-content/uploads/2018/04/pokemon-logo-gif-3.gif"
          //src="https://c.tenor.com/fCvghb3z3MEAAAAj/pokemon-pikachu.gif"          
          src="https://media.giphy.com/media/Ga2AFVbwQmWCk/giphy.gif" 
          //src="https://tenor.com/bdx3p.gif"
          alt=""
        />      
    </Container>
  );
};