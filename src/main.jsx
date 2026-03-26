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
import { RoleLayout } from "./Components/Layout/RoleLayout.jsx";
import { roleConfigs } from "./Components/Config/role.js";

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
        <Route 
          path="/calidad" 
          element={
            <RoleLayout
              title ={roleConfigs.calidad.title}
              menuItems={roleConfigs.calidad.menuItems}>
              <VistaCalidad/>
            </RoleLayout>}/>


        <Route 
          path="/gerencia" 
          element={
          <RoleLayout
            title={roleConfigs.gerencia.title}
            menuItems={roleConfigs.gerencia.menuItems}>
            <VistaGerencia/>
          </RoleLayout>}/>


        <Route 
          path="/operador" 
          element={
            <RoleLayout
              title={roleConfigs.operador.title}
              menuItems={roleConfigs.gerencia.menuItems}>
              <VistaOperador/>
            </RoleLayout>}/>
        
        
        <Route 
          path="/supervisor" 
          element={
            <RoleLayout
              title={roleConfigs.supervisor.title}
              menuItems={roleConfigs.supervisor.menuItems}>
              <VistaSupervisor/>
            </RoleLayout>}/>


      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
