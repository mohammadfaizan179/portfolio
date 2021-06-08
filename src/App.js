import NavbarComponent from "./Component/NavbarComponent";
import Header from "./Component/Header";
import About from "./Component/About";
import Educations from "./Component/Educations";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Certification from "./Component/Certification";
import Achievements from "./Component/Achievements";
import {Button} from "@material-ui/core";
import {animateScroll as scroll} from "react-scroll";

function App() {
  return (
    <div>
        <NavbarComponent />
        <Header />
        <About />
        <Educations />
        <Skills />
        <Projects />
        <Certification />
        <Achievements />
        {/* <Button variant="contained" color="primary" onClick={()=>{scroll.scrollToTop()}}>Top</Button> */}
    </div>
  );
}

export default App;
