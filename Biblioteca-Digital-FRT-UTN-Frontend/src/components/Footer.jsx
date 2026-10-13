import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbHelpHexagon } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import "../App.css";
import "../components/styles-components/footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light py-4 mt-5">
      <Container>
        <Row className="justify-content-between text-start">
          <Col xs={12} lg={4}>
            <h5>Repositorio de Proyectos UTN</h5>
            <p>
              Plataforma digital para las tecnicaturas y licenciaturas de la
              Universidad Tecnológica Nacional.
            </p>
          </Col>

          <Col xs={12} lg={3}>
            <h5>Contactos</h5>

            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="mailto:tecnicaturas@utn.edu.ar"
                  className="link-footer text-light text-decoration-none"
                >
                  <CgMail className="me-2" />
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-footer text-light text-decoration-none"
                >
                  <FaInstagram className="me-2" />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-footer text-light text-decoration-none"
                >
                  <AiOutlineYoutube className="me-2" />
                  YouTube
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} lg={2}>
            <h5>Secciones</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="/"
                  className="link-footer text-light text-decoration-none"
                >
                  <IoHomeOutline className="me-2" />
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="/tecnicaturas"
                  className="link-footer text-light text-decoration-none"
                >
                  <BsPersonWorkspace className="me-2" />
                  Tecnicaturas
                </a>
              </li>

              <li>
                <a
                  href="/ayuda"
                  className="link-footer text-light text-decoration-none"
                >
                  <TbHelpHexagon className="me-2" />
                  Ayuda
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
