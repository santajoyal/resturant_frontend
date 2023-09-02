import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
// import './App.css';
import "./sb-admin-2.min.css";
import Login from "./Login";
import Portal from "./Portal";
import ListRestaurant from "./ListRestaurant";
import CreateRestaurant from "./CreateRestaurant";
import ListDishes from "./ListDishes";
import CreateDishes from "./CreateDishes";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="/portal/list-restaurants" element={<ListRestaurant />} />
          <Route path="/portal/create-restaurants" element={<CreateRestaurant />} />
          <Route path="/portal/list-dishes/:rId" element={<ListDishes />} />
          <Route path="/portal/create-dishes/:rId" element={<CreateDishes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
