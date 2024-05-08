import { ToastBar } from "react-hot-toast";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Notfound from "./Pages/NotFound/Notfound";
import SingleProduct from "./Pages/SingleProducts/SingleProduct";
function App() {
  return (
    <div className="app">
      {/* <ToastBar position="top-right" /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
