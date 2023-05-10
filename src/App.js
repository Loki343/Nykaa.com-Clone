import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
