import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
