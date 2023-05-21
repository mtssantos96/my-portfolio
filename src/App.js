import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
