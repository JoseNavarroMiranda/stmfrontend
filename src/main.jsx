import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
/*Libreiras de bootstrap*/
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*Importacion de componentes*/
import Login from "./Components/LoginComponente/Login.jsx";
import Background from "./Components/LoginComponente/Background.jsx";
/*Lista de vistas con route*/
import VistaCalidad from "./Components/Calidad/VistaCalidad.jsx";
import VistaGerencia from "./Components/Gerencia/VistaGerencia.jsx";
import VistaOperador from "./Components/Operador/VistaOperador.jsx";
import VistaSupervisor from "./Components/Supervisor/VistaSupervisor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Background>
              <Login />
            </Background>
          }
        />
        <Route path="/calidad" element={<VistaCalidad/>} />
        <Route path="/gerencia" element={<VistaGerencia/>}/>
        <Route path="/operador" element={<VistaOperador/>}/>
        <Route path="/supervisor" element={<VistaSupervisor/>}/>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
