import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../components/styles-components/navbar.css'

function NavbarComponent() {
    return (
        <Navbar expand="lg p-3" className="navbar">
            <Container>
                <Navbar.Brand className='fw-bold' href="#">Tesis UTN-FRT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto text-center">
                        <Nav.Link className="nav-link" href="/">Inicio</Nav.Link>

                        <NavDropdown className="navbar-dropdown" title="Tecnicaturas" id="navbar-tecnicaturas">
                            <NavDropdown.Item className="text-center p-2" href="#">Programación</NavDropdown.Item>
                            <NavDropdown.Item className="text-center p-2" href="#">Desarrollo de Videojuegos</NavDropdown.Item>
                            <NavDropdown.Item className="text-center p-2" href="#">Higiene y Seguridad</NavDropdown.Item>
                            <NavDropdown.Item className="text-center p-2" href="#">Mecatrónica</NavDropdown.Item>
                            <NavDropdown.Item className="text-center p-2" href="#">Logística</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link className="nav-link" href="/ayuda">Ayuda</Nav.Link>
                    </Nav>

                    <Nav className="navbar-btn gap-2 d-flex flex-column flex-lg-row">
                        <Button className="btn-login">Iniciar sesión</Button>
                        <Button className="btn-register">Registrarse</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;