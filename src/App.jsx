import { ToastBar } from "react-hot-toast";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
function App() {
  return (
    <div className="app">
      <ToastBar position="top-right" />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Products/>}/>

      </Routes>
    </div>
  );
}

export default App;
