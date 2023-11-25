import Footer from "./customer/Components/Footer";
import Navigation from "./customer/Components/navigation/Navigation"
import HomePage from "./customer/pages/HomePage";
function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
