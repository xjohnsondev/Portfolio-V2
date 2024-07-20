import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutSection/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
