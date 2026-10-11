import { Route, Routes } from "react-router-dom";
import Ayuda from "../../pages/Ayuda";
import Error404 from "../../pages/Error404";
import { PaginaTecnicaturas } from "../../pages/PaginaTecnicaturas";
import { PaginaTesisCarrera } from "../../pages/PaginaTesisCarrera";
import { PaginaDetalleTesis } from "../../pages/PaginaDetalleTesis";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/tecnicaturas" element={<PaginaTecnicaturas />} />
      <Route
        path="/tecnicaturas/:tecnicaturaId/tesis"
        element={<PaginaTesisCarrera />}
      />
      <Route path="/tesis/:tesisId" element={<PaginaDetalleTesis />} />
    </Routes>
  );
};

export default Rutas;
