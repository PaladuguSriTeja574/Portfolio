import './App.css';
import Hero from './Sections/Hero/Hero';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import Navbar from './Sections/Navbar/Navbar';
import About from './Sections/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
