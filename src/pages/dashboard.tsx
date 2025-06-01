import { Link } from "react-router-dom";
import LayoutAuth from "../layouts/layout-auth";
import ProductCard from "../components/ProductsCard";


export default function Dashboard() {
  return (
  <>
    <LayoutAuth title="Dashboard">
      <h1>Dashboard</h1>
      <Link className="block text-blue-600" to="/login">
        Iniciar sesión
      </Link>
      <Link className="text-blue-600" to="/register">
        Registrarme ahora
      </Link>
    </LayoutAuth>

 <div>
      <h1>Catalogo de productos</h1>
     
        <div className="flex space-x-4 justify-center gap-10">
          <ProductCard
          
          nombre= "Caja de galletas tentación"
          precio={25.99}
          cantidad={1}
          Agregar={()=>alert("Agregado")}
          Incrementar={()=> console.log("Aumentar")}
          Disminuir={()=>console.log("Disminuir")} 
          />

          <ProductCard
          
          nombre = "Caja de Chiki Wafer Fiesta"
          precio = {10.20}
          cantidad = {1}
          Agregar={()=>alert("Agregado")}
          Incrementar={()=> console.log("Aumentar")}
          Disminuir={()=>console.log("Disminuir")}
          />
        </div>
    </div>



  </>
  );
}
