
const routes = [
  { title: "Dashboard", route: "/" },
  { title: "Productos", route: "/products/catalog" },
  { title: "Favoritos", route: "/favorites" },
  { title: "Compras", route: "/purchase/history" },
  { title: "Consultas", route: "/request/history" },
  { tittle: "Pago", route: "/Pago"},
  { tittle: "ProductoIndivual", route: "/ProductoIndividual"},

];

export default function getRoutes(){
    return routes;
}
