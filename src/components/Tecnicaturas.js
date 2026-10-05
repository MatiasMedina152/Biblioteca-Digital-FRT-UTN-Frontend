import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`../imagenes/tecnicatura-${props.imagen}.jpg`} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Button variant="primary">TFI</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;