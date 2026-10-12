import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { obtenerTesisPorTecnicatura } from '../sevice/servicioTesis';
import { obtenerTecnicaturaPorId } from '../sevice/servicioTecnicaturas';
import { BarraFiltrosTesis } from '../components/BarraFiltrosTesis';
import "../App.css";

export const PaginaTesisCarrera = () => {
  const { tecnicaturaId } = useParams();
  const [listaTesis, setListaTesis] = useState([]);
  const [nombreTecnicatura, setNombreTecnicatura] = useState("");
  const [cargando, setCargando] = useState(true);

  const [filtros, setFiltros] = useState({ autor: "", anio: "", tema: "" });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [datosTecnicatura, datosTesis] = await Promise.all([
          obtenerTecnicaturaPorId(tecnicaturaId),
          obtenerTesisPorTecnicatura(tecnicaturaId),
        ]);
        setNombreTecnicatura(datosTecnicatura.nombre);
        setListaTesis(datosTesis);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un problema al obtener las tesis.",
        });
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, [tecnicaturaId]);

  const manejarCambioFiltro = (clave, valor) => {
    setFiltros((previo) => ({ ...previo, [clave]: valor }));
  };

  const manejarLimpiarFiltros = () => {
    setFiltros({ autor: "", anio: "", tema: "" });
  };

  const aniosDisponibles = [...new Set(listaTesis.map((t) => t.anio))];
  const temasDisponibles = [...new Set(listaTesis.map((t) => t.tema))];

  const tesisFiltradas = listaTesis.filter((tesis) => {
    const coincideAutor =
      filtros.autor === "" ||
      tesis.autores.some((autor) =>
        autor.toLowerCase().includes(filtros.autor.toLowerCase()),
      );
    const coincideAnio =
      filtros.anio === "" || tesis.anio.toString() === filtros.anio;
    const coincideTema = filtros.tema === "" || tesis.tema === filtros.tema;

    return coincideAutor && coincideAnio && coincideTema;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="my-4 flex-grow-1">
        <h2 className=" tecnicaturas-tesis mb-4">
          Tesis de {nombreTecnicatura || "la Tecnicatura"}
        </h2>

        {cargando ? (
          <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            <Col lg={3}>
              <BarraFiltrosTesis
                filtros={filtros}
                alCambiarFiltro={manejarCambioFiltro}
                alLimpiar={manejarLimpiarFiltros}
                temasDisponibles={temasDisponibles}
                aniosDisponibles={aniosDisponibles}
              />
            </Col>

            <Col lg={9}>
              {tesisFiltradas.length === 0 ? (
                <div className="alert alert-warning">
                  No se encontraron tesis con los filtros seleccionados.
                </div>
              ) : (
                <Row>
                  {tesisFiltradas.map((tesis) => (
                    <Col md={6} key={tesis.id} className="mb-4">
                      <Card className="car-tesis h-100">
                        <Card.Img className="card-img-top"
                          variant="top"
                          src={tesis.miniaturaimagen}
                          style={{ height: "160px", objectFit: "cover" }}
                        />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="card-titulo-tesis">
                            {tesis.titulo}
                          </Card.Title>
                          <p className="small mb-1">
                            <strong>Autores:</strong> {tesis.autores.join(", ")}
                          </p>
                          <p className="small mb-2">
                            <strong>Año:</strong> {tesis.anio} |{" "}
                            <strong>Tema:</strong> {tesis.tema}
                          </p>
                          <Card.Text className="flex-grow-1">
                            {tesis.resumen}
                          </Card.Text>
                          <Button
                            as={Link}
                            to={`/tesis/${tesis.id}`}
                            variant="dark"
                            className="mt-auto w-100"
                          >
                            Ver Detalle
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};
