import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";
import Login from "./pages/login";
import ProductsCatalog from "./pages/products-catalog";
import PurchaseNew from "./pages/purchases/purchase-new";
import PurchaseHistory from "./pages/purchases/purchase-history/purchase-history";
import RequestNew from "./pages/requests/request-new";
import RequestHistory from "./pages/requests/request-history/request-history";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/catalog" element={<ProductsCatalog />} />
        <Route path="/purchase/new" element={<PurchaseNew />} />
        <Route path="/purchase/history" element={<PurchaseHistory />} />
        <Route path="/request/new" element={<RequestNew />} />
        <Route path="/request/history" element={<RequestHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
