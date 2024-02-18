import './App.css';
import { Home } from './Pages/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './Components/Header/Header';
import {Routes, Route} from "react-router-dom";
import {ContactUs} from "./Pages/ContactUs/ContactUs";
import {AboutUs} from "./Pages/AboutUs/AboutUs";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
