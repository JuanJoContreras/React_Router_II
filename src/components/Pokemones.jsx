import { Form, Button} from 'react-bootstrap';

export default function TextControlsExample() {
  return (
    <>
    <Form.Select aria-label="Default select example">
      <option>Pokemones</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Button variant="info" className="text-white mb-3 text-center justify-content-center">Ver Detalles</Button>{' '}
    </> 
  );
}