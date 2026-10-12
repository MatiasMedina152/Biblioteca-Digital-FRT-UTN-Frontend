import './inicio.css';
import CarruselInicio from '../components/CarruselInicio';
import { Card } from 'react-bootstrap';
import dev1 from '../IMG/IMG cardNosotros/dev1.jpeg';
import dev2 from '../IMG/IMG cardNosotros/dev2.jpeg';
import dev3 from '../IMG/IMG cardNosotros/dev3.jpeg';
import { Link } from 'react-router-dom';


function Inicio() {
  return (
    
  <>
      <CarruselInicio/>
      
     
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="fw-bold border-start border-4 ps-3 inicio-titulo">
              Facultad Regional Tucumán (UTN)
            </h2>
          </div>

          <div className="col-md-7">
            <p className="lead inicio-texto">
              La Facultad Regional Tucumán es una unidad académica de la Universidad Tecnológica Nacional. 
              Nos enfocamos en la excelencia, formando profesionales, técnicos e ingenieros altamente 
              capacitados para impulsar la innovación, la tecnología y el desarrollo industrial de nuestra 
              región y del país.
            </p>
          </div>

        </div>
      </div>
      


      <div className="container py-5 mb-5">
        <div className="row align-items-center">
          
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="fw-bold border-start border-4 ps-3 inicio-titulo">
              Tecnicaturas y Licenciaturas
            </h2>
          </div>

          <div className="col-md-7">
            <p className="lead inicio-texto">
              Explora nuestro repositorio oficial de trabajos finales y proyectos de grado. 
              Aquí almacenamos las tesis destacadas de nuestras diferentes carreras, reflejando 
              el altísimo nivel académico, la innovación y la capacidad resolutiva de nuestros 
              estudiantes frente a desafíos tecnológicos reales.
            </p>
            
            <Link 
              to="/tecnicaturas" 
              className="btn mt-3 fw-bold px-4 py-2 inicio-btn">
              Explorar Tesis
            </Link>
          </div>

        </div>
      </div>
      
      
      <div className="container py-5 mb-5 text-white">
        
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 border-bottom border-secondary pb-3">
          <div>
            <h2 className="fw-bold mb-2">Quines somos</h2>
            <p className="mb-0">Las personas detrás de las ideas.</p>
          </div>
          <div className="mt-2 mt-md-0">
            <span className="fw-bold text-uppercase fs-6" style={{ color: 'var(--color-secundario)' }}>
              Promoción 2026
            </span>
          </div>
        </div>

       
        <div className="row g-4 mt-2">
          
          
          <div className="col-md-4">
            
            <Card bg="dark" border="secondary" className="h-100 rounded-4 overflow-hidden card-hover-neon">
              <Card.Img 
                variant="top" 
                src={dev1} 
                className="img-dev-custom" 
                alt="Foto Desarrollador 1" 
              />
              <Card.Body className="p-4 text-white">
                <Card.Title className="fw-bold fs-4 m-0">Matias Rosales</Card.Title>
                
                
                <p className="fw-bold mb-3 mt-1" style={{ color: 'var(--color-secundario)', fontSize: '0.9rem' }}>
                  Programación · Promoción 2026
                </p>
                
                
                <Card.Text className="text-secondary">
                  Diseñador y Desarrollador UI/UX. 
                  Responsable de la identidad visual de la plataforma, el sistema de diseño responsivo con React-Bootstrap y de garantizar
                  que la búsqueda y visualización de tesis sea accesible, intuitiva y atractiva para toda la comunidad de la UTN-FRT.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

         
          <div className="col-md-4">
            <Card bg="dark" border="secondary" className="h-100 rounded-4 overflow-hidden card-hover-neon">
              <Card.Img 
                variant="top" 
                src={dev2} 
                className="img-dev-custom" 
                alt="Foto Desarrollador 2" 
              />
              <Card.Body className="p-4 text-white">
                <Card.Title className="fw-bold fs-4 m-0">Matias Medina</Card.Title>
                <p className="fw-bold mb-3 mt-1" style={{ color: 'var(--color-secundario)', fontSize: '0.9rem' }}>
                  Programación · Promoción 2026
                </p>
                <Card.Text className="text-secondary">
                  Especialista en Ciberseguridad y QA. Dedicado a proteger la integridad del repositorio, asegurar el proceso de carga de archivos de tesis, implementar el sistema de autenticación de estudiantes/profesores y realizar las pruebas de calidad de la plataforma.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

         
          <div className="col-md-4">
            <Card bg="dark" border="secondary" className="h-100 rounded-4 overflow-hidden card-hover-neon">
              <Card.Img 
                variant="top" 
                src={dev3} 
                className="img-dev-custom" 
                alt="Foto Desarrollador 3" 
              />
              <Card.Body className="p-4 text-white">
                <Card.Title className="fw-bold fs-4 m-0">Matias Briseño</Card.Title>
                <p className="fw-bold mb-3 mt-1" style={{ color: 'var(--color-secundario)', fontSize: '0.9rem' }}>
                  Programación · Promoción 2026
                </p>
                <Card.Text className="text-secondary">
                 Desarrollador Fullstack. Encargado de la lógica de funcionamiento del repositorio, la gestión de la base de datos de los proyectos finales y de implementar los filtros de búsqueda avanzada por carrera para que encontrar cualquier tesis sea rápido y eficiente.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </>
        
  );
}

export default Inicio;
