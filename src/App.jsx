
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </Router>
      </ShopContextProvider>

    
  );
}

export default App;

