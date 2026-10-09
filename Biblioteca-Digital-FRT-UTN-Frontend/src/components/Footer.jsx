import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbHelpHexagon } from "react-icons/tb";

const Footer = () =>{
    return(
        <>
          <footer className="bg-dark text-light py-4 mt-5">
            <Container>
              <Row>
                <Col md={3}>
                  <h5>Repositorio de Proyectos UTN</h5>
                  <p>Plataforma digital para las tecnicaturas y licenciaturas de la Universidad Tecnologia Nacional.</p>
                </Col>
                <Col md={3}>
                  <h5>Contactos</h5>
                  <p> <FaEnvelope /> Email: tecnicaturas@utn.edu.ar</p>
                  <p> <FaInstagram /> Instagram</p>
                  <p> <IoLogoYoutube /> Youtube</p>
                </Col>
                <Col md={3}>
                  <h5>Inicio</h5>
                  <p> <BsPersonWorkspace /> Nosotros</p>
                  <p> <TbHelpHexagon /> Ayuda</p>
                </Col>
               
              </Row>
            </Container>
          </footer>
        
        </>
    )
}

export default Footer;
