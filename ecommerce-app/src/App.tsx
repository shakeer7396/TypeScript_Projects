import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar />
      <div className= "flex flex-col min-h-screen">
      <main className="container mx-auto flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/mens-clothes"
            element={
              <ProtectedRoute>
                <MensClothes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/womens-clothes"
            element={
              <ProtectedRoute>
                <WomensClothes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/electronics"
            element={
              <ProtectedRoute>
                <Electronics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jewelery"
            element={
              <ProtectedRoute>
                <Jewelery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
