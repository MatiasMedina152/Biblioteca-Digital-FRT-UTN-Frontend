import { Route, Routes } from "react-router-dom";
import Ayuda from "../../pages/Ayuda";
import Error404 from "../../pages/Error404";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default Rutas