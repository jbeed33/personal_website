import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
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
    </div>
  );
}

export default App;
