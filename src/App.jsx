import { ToastBar } from "react-hot-toast";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

    </div>
  );
}

export default App;
