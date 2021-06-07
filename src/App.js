import NavbarComponent from "./Component/NavbarComponent";
import Header from "./Component/Header";
import About from "./Component/About";
import Education from "./Component/Education";
import Skills from "./Component/Skills";
import Certification from "./Component/Certification";
import Achievements from "./Component/Achievements";

function App() {
  return (
    <div>
        <NavbarComponent />
        <Header />
        <About />
        <Education />
        <Skills />
        <Certification />
        <Achievements />
    </div>
  );
}

export default App;
