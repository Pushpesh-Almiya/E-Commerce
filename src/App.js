import Cart from "./customer/Components/Cart/Cart";
import Footer from "./customer/Components/Footer";
import Order from "./customer/Components/Order/Order";
import OrderDetails from "./customer/Components/Order/OrderDetails";
import Product from "./customer/Components/Product/Product";
import CheckOut from "./customer/Components/checkout/CheckOut";
import Navigation from "./customer/Components/navigation/Navigation";
import ProductDetails from "./customer/Components/productDetails/ProductDetails";
import HomePage from "./customer/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
          <Route path="/product/:productid" element={<ProductDetails />} />
          <Route path ="/cart" element={<Cart/>}/>
          <Route path ="/checkout" element={<CheckOut/>}/>
          <Route path ="/account/order" element={<Order/>}/>
          <Route path ="account/order/:orderId" element={<OrderDetails/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
