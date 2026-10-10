import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { obtenerTecnicaturas } from '../sevice/servicioTecnicaturas';
import "../App.css";

export const PaginaTecnicaturas = () => {
  const [tecnicaturas, setTecnicaturas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const datos = await obtenerTecnicaturas();
        setTecnicaturas(datos);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error de conexión",
          text: "No se pudieron cargar las tecnicaturas.",
        });
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="my-4 flex-grow-1">
        <h1 className="tecnicaturas-titulo mb-4 text-center">Tecnicaturas Disponibles</h1>

        {cargando ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            {tecnicaturas.map((tecnicatura) => (
              <Col key={tecnicatura.id} md={4} className="mb-4">
                <Card className="card-tecnicaturas h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={tecnicatura.imagen}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{tecnicatura.nombre}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {tecnicatura.descripcion}
                    </Card.Text>
                    <p className="fw-bold mb-3">
                      Cantidad de Tesis:{" "}
                      <span className="badge bg-danger">
                        {tecnicatura.cantidadTesis}
                      </span>
                    </p>
                    <Button
                      as={Link}
                      to={`/tecnicaturas/${tecnicatura.id}/tesis`}
                      variant="dark"
                      className="mt-auto w-100"
                    >
                      Ver Tesis
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};
