
const routes = [
  { title: "Inicio", route: "/" },
  { title: "Productos", route: "/products/catalog" },
  { title: "Compras", route: "/purchase/history" },
  { title: "Consultas", route: "/request/history" },
  { title: "Nosotros", route: "/us" }
];

export default function getRoutes(){
    return routes;
}
