import Portfolio from "./components/Portfolio";
import Navbar from './components/Navbar';
import About from "./components/About";
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Routes, Route } from "react-router-dom";




export default function App() {


  
  return (
    <div>
      <Navbar />

    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="/projects" element={<Projects/>}/>

    </Routes>

    </div>

  );
}
