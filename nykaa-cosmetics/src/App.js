import { Navbar } from './Components/Navbar/1Navbar';
import { Footer } from './Components/Footer/1Footer';
import { LandingPage } from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
