import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
    <HeroSection/>
    <AboutSection/>
    <Skills/>
    <Resume/>
    <Portfolio/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}

export default App;
