// BrowserRouter: wraps the whole app and enables React Router
// Routes: container that holds all our routes
// Route: defines which component to show for each URL path
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CartProvider: wraps the app so every page can access the cart
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <CartProvider>
      {/* BrowserRouter enables navigation between pages without page refresh */}
      <BrowserRouter>
        {/* Navbar shows on every page because it's outside Routes */}
        <Navbar />
        {/* Routes decides which page component to show based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;