import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MensClothes from "./pages/MensClothes";
import WomensClothes from "./pages/WomensClothes";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

const App: React.FC = () => {

  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="container mx-auto flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mens-clothes" element={<MensClothes />} />
            <Route path="/womens-clothes" element={<WomensClothes />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
