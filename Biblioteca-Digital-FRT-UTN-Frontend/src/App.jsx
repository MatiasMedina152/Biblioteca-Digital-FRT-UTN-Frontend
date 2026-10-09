import './App.css'

import NavbarComponent from './components/Navbar.jsx';
import BtnTop from './components/BtnTop.jsx'
import Rutas from './components/routes/Rutas.jsx';

function App() {
  return (
    <>
      <NavbarComponent />
      <Rutas />
      <BtnTop />
    </>
  )
}

export default App