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
                <Navbar.Brand className='fw-bold' href="/">Tesis UTN-FRT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto text-center gap-3">
                        <Nav.Link className="nav-link" href="/">Inicio</Nav.Link>
                        <Nav.Link className="nav-link" href="/tecnicaturas">Tecnicaturas</Nav.Link>
                        <Nav.Link className="nav-link" href="/ayuda">Ayuda</Nav.Link>
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