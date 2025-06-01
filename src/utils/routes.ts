
const routes = [
  { title: "Dashboard", route: "/" },
  { title: "Productos", route: "/products/catalog" },
  { title: "Favoritos", route: "/favorites" },
  { title: "Compras", route: "/purchase/history" },
  { title: "Consultas", route: "/request/history" },
];

export default function getRoutes(){
    return routes;
}
