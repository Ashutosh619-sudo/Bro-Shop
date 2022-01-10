import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from './Screens/ProductScreen'
import CartScreen from "./Screens/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen/>}></Route>
            <Route path="/cart/:id" element={<CartScreen/>}></Route>
            <Route path="/cart" element={<CartScreen/>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
