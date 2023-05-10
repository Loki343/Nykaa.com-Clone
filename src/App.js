import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
// import { LandingPage } from "./Components/LandingPage/LandingPage";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
