import AnimationController from "./components/AnimationController";
import MouseParticles from "./components/MouseParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-app">
      
      <AnimationController />

      <MouseParticles />

      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Education />

        <Experience />

        <Projects />

        <Certifications />

        <Leadership />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;