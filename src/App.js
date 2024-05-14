import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
