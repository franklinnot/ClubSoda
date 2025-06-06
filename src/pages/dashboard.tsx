import { Link } from "react-router-dom";
import LayoutAuth from "../layouts/layout-auth";


export default function Dashboard() {
  return (
  
    <LayoutAuth title="Dashboard">
      <h1>Dashboard</h1>
      <Link className="block text-blue-600" to="/login">
        Iniciar sesión
      </Link>
      <Link className="text-blue-600" to="/register">
        Registrarme ahora
      </Link>
    </LayoutAuth>




  
  );
}
