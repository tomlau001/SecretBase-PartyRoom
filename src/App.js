import './App.css';
import AboutUs from "./components/AboutUs";
import Services from "./components/Services.js";
import ContactUs from "./components/ContactUs";
import HeroCarousel from './components/HeroCarousel';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <div>
      <main>
        <NavComponent/>
        <HeroCarousel/>
        <AboutUs />
        <Services />
        <ContactUs />
        <footer>
          <p> &copy; 2023 Secret Base Party Room</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
