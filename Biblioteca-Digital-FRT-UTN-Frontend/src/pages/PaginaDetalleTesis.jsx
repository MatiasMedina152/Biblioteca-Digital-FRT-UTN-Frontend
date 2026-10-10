import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Carousel, Image, Badge, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { obtenerTesisPorId } from '../sevice/servicioTesis';
import "../App.css";

export const PaginaDetalleTesis = () => {
  const { tesisId } = useParams();
  const [tesis, setTesis] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarTesis = async () => {
      try {
        const datos = await obtenerTesisPorId(tesisId);
        setTesis(datos);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar el detalle de la tesis.",
        });
      } finally {
        setCargando(false);
      }
    };

    cargarTesis();
  }, [tesisId]);

  if (cargando) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Container className="text-center my-5 flex-grow-1">
          <Spinner animation="border" variant="primary" />
        </Container>
      </div>
    );
  }

  if (!tesis) return null;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="my-4 flex-grow-1">
        <Row className="mb-4">
          <Col md={6}>
            <Image
              src={tesis.imagenPrincipal}
              fluid
              rounded
              className="mb-3 shadow-sm"
              style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
            />

            {tesis.galeria && tesis.galeria.length > 0 && (
              <Carousel className="shadow-sm rounded overflow-hidden">
                {tesis.galeria.map((urlImagen, indice) => (
                  <Carousel.Item key={indice}>
                    <img
                      className="d-block w-100"
                      src={urlImagen}
                      alt={`Imagen de galería ${indice + 1}`}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>

          <Col className="titulos-proyecto" md={6}>
            <h2>{tesis.titulo}</h2>
            <h5 className="mb-2">{tesis.nombreTecnicatura}</h5>
            <p>Fecha de presentación: {tesis.fecha}</p>

            <div className="mb-3">
              <Badge bg="danger" className="me-2">
                Vistas: {tesis.vistas}
              </Badge>
              <Badge bg="danger">Año: {tesis.anio}</Badge>
            </div>

            <Card className="integrantes mb-3">
              <Card.Header as="h6">Integrantes del Proyecto</Card.Header>
              <Card.Body>
                <Row>
                  {tesis.integrantes.map((integrante, indice) => (
                    <Col
                      key={indice}
                      xs={6}
                      className="d-flex align-items-center mb-2"
                    >
                      <Image
                        src={integrante.foto}
                        roundedCircle
                        width={70}
                        height={70}
                        className="integrante-imagen me-2"
                      />
                      <span>{integrante.nombre}</span>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            <Card className="redes shadow-sm">
              <Card.Header as="h6">Documentación y Enlaces</Card.Header>
              <Card.Body className="d-flex flex-wrap gap-2">
                <Button variant="dark" href={tesis.urlPdf} target="_blank">
                  Leer Tesis (PDF)
                </Button>
                <Button variant="dark" href={tesis.urlVideo} target="_blank">
                  Ver Video
                </Button>
                <Button
                  variant="dark"
                  href={tesis.urlGithub}
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="dark"
                  href={tesis.urlYoutube}
                  target="_blank"
                >
                  YouTube
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12}>
            <Card className="descripcion-proyecto shadow-sm">
              <Card.Header as="h5">Descripción del Proyecto</Card.Header>
              <Card.Body>
                <Card.Text>{tesis.resumen}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
