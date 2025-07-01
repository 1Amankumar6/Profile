import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Journey from "./components/Journey/Journey";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Recent from "./components/Recent/Recent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Journey/>
      <Recent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
