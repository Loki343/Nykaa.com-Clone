import { Navbar } from "./Components/Navbar/1Navbar";
import { Footer } from "./Components/Footer/1Footer";
import { LandingPage } from "./Components/LandingPage/LandingPage";
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
