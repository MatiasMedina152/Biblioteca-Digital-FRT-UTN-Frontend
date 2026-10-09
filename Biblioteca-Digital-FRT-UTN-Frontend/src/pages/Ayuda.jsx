import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./ayuda.css"

function Ayuda() {
    return (
        <Container className="py-5">
            {/* Título */}
            <Row className="titulo-ayuda text-center mb-5 rounded-4">
                <Col>
                    <h1 className="text-center fw-bold mb-3">Centro de Ayuda</h1>
                    <p className="text-center text-muted">
                        Encontrá respuestas a las preguntas más frecuentes
                        o contactanos si necesitás ayuda.
                    </p>
                </Col>
            </Row>

            {/* Preguntas frecuentes */}
            <Row className="mb-5">
                <Col>
                    <h2 className="titulo-seccion mb-5 mt-3 text-center fw-semibold rounded-4">Preguntas frecuentes</h2>
                    <Accordion className='acordeon-ayuda'>

                        <Accordion.Item className='mb-2 rounded-3' eventKey="0">
                            <Accordion.Header>¿Qué es la Vidriera Digital?</Accordion.Header>
                            <Accordion.Body>
                                La Vidriera Digital es un espacio donde se
                                presentan los diferentes proyectos y tesis
                                realizados por estudiantes de las distintas
                                tecnicaturas.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='mb-2 rounded-3' eventKey="1">
                            <Accordion.Header>¿Qué tipo de proyectos puedo encontrar?</Accordion.Header>
                            <Accordion.Body>
                                Podés encontrar proyectos y tesis de las
                                diferentes tecnicaturas, junto con información
                                e imágenes relacionadas con cada trabajo.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='mb-2 rounded-3' eventKey="2">
                            <Accordion.Header>¿Cómo puedo buscar un proyecto?</Accordion.Header>
                            <Accordion.Body>
                                Podés navegar por las diferentes tecnicaturas
                                desde el menú de navegación y consultar los
                                proyectos disponibles en cada una.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='mb-2 rounded-3' eventKey="3">
                            <Accordion.Header>¿Quién puede publicar un proyecto?</Accordion.Header>
                            <Accordion.Body>
                                Los proyectos son publicados por los
                                responsables correspondientes de cada
                                tecnicatura.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item className='mb-2 rounded-3' eventKey="4">
                            <Accordion.Header>¿Encontraste un problema con un proyecto?</Accordion.Header>
                            <Accordion.Body>
                                Si encontraste información incorrecta o algún
                                problema con un proyecto, podés comunicarte
                                con nosotros mediante el formulario de
                                contacto.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>
            
            {/* Formulario */}
            <Row className="formulario justify-content-center max-w-100">
                <Col xs={12} md={10} lg={8}>
                    <h2 className="titulo-seccion text-center mb-3 mt-5 fw-semibold rounded-4">Contáctanos</h2>
                    <p className="texto-formulario text-center mb-5">
                        ¿No encontraste la respuesta que buscabas?
                        Escribinos y te ayudaremos.
                    </p>

                    <div className='formulario-ayuda rounded-4'>
                        <Form>
                          <Row>
                              <Col md={6}>
                                  <Form.Group className="mb-3">
                                      <Form.Label>Nombre</Form.Label>
                                      <Form.Control type="text" placeholder="Ingresá tu nombre"/>
                                  </Form.Group>
                              </Col>

                              <Col md={6}>
                                  <Form.Group className="mb-3">
                                      <Form.Label>Correo electrónico</Form.Label>
                                      <Form.Control type="email" placeholder="nombre@ejemplo.com"/>
                                  </Form.Group>
                              </Col>
                          </Row>

                          <Form.Group className="mb-3">
                              <Form.Label>Motivo de contacto</Form.Label>

                              <Form.Select>
                                  <option>Seleccioná un motivo</option>
                                  <option>Consulta general</option>
                                  <option>Problema con un proyecto</option>
                                  <option>Problema con la página</option>
                                  <option>Otro</option>
                              </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3">
                              <Form.Label>Mensaje</Form.Label>

                              <Form.Control as="textarea" rows={5} placeholder="Escribí tu consulta..."/>
                          </Form.Group>

                          <div className="d-grid">
                              <Button className="btn-enviar fw-semibold" variant="primary" type="submit">Enviar mensaje</Button>
                          </div>
                      </Form>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Ayuda;