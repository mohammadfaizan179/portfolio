import NavbarComponent from "./Component/NavbarComponent";
import Header from "./Component/Header";
import About from "./Component/About";
import Educations from "./Component/Educations";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Certification from "./Component/Certification";
import Achievements from "./Component/Achievements";

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
    </div>
  );
}

export default App;
