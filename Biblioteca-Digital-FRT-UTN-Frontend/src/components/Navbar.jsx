import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../App.css";
import "../components/styles-components/navbar.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg p-3" className="navbar">
      <Container>
        <Navbar.Brand as={Link} className="fs-4 fw-bold" to="/">
          Tesis UTN-FRT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto text-center gap-3">
            <Nav.Link as={Link} className="nav-link" to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/tecnicaturas">
              Tecnicaturas
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/ayuda">
              Ayuda
            </Nav.Link>
          </Nav>

          <Nav className="navbar-btn gap-2 d-flex flex-column flex-lg-row">
            <Button className="btn-login-register">Iniciar sesión</Button>
            <Button className="btn-login-register">Registrarse</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
