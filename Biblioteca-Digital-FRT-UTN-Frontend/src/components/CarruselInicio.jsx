import { Carousel } from 'react-bootstrap';
import utn1 from '../IMG/IMG carrusel/utn1.jpg';
import utn2 from '../IMG/IMG carrusel/utn2.jpg';
import utn3 from '../IMG/IMG carrusel/utn3.jpg';
import '../components/styles-components/carruselInicio.css'

function CarruselInicio() {
  return (
    <div className="mx-auto mt-4 rounded-4 overflow-hidden shadow" style={{ maxWidth: '900px' }} >
    <Carousel  >
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-carrusel-custom "
          src={utn1}
          alt="Imagen la Universidad UTN"
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3 mb-4" >
          <h3> Universidad Tecnologica Nacional</h3>
          <p>Un lugar donde las personas forjan su futuro y el del pais.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-carrusel-custom "
          src={utn2}
          alt="Imagen de la Universidad UTN"
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3 mb-4">
          <h3>Tecnicaturas y Licenciauras</h3>
          <p>Tambien podemos ofrecer carreras profesionales de corta duracion</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-carrusel-custom "
          src={utn3}
          alt="Grupo de Estudiantes" 
        />
        <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3 mb-4">
          <h3>Nuestros Estudiantes</h3>
          <p>Ellos son el motor del mañana. "Jovenes" promesas que guiaran el futuro de la Nacion (lamentablemente)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarruselInicio;