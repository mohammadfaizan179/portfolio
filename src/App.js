import React,{useEffect} from 'react'
import NavbarComponent from "./Component/NavbarComponent";
import Header from "./Component/Header";
import About from "./Component/About";
import Educations from "./Component/Educations";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Certification from "./Component/Certification";
import Achievements from "./Component/Achievements";
import Footer from "./Component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <div>

        <NavbarComponent />
        <Header />
        <div data-aos="fade-right" style={{overflowX: "hidden", overflowY: "hidden"}} >
          <About />
        </div>
        
        <div data-aos="fade-left" style={{overflowX: "hidden", overflowY: "hidden"}}>
          <Educations />
        </div>
        
        <div data-aos="fade-right" style={{overflowX: "hidden", overflowY: "hidden"}}>
          <Skills />
        </div>
        
        <div data-aos="fade-left" style={{overflowX: "hidden", overflowY: "hidden"}}>
          <Projects />
        </div>
        
        <div data-aos="fade-right" style={{overflowX: "hidden", overflowY: "hidden"}}>
          <Certification />
        </div>

        <div data-aos="fade-left" style={{overflowX: "hidden", overflowY: "hidden"}}>
          <Achievements />
        </div>
        
        <Footer />
    </div>
  );
}

export default App;
