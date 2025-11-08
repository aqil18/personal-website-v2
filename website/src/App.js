import './App.css';
import Navbar from "./containers/Navbar/Navbar";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Connect from './containers/Connect/Connect';
import RevealWrapper from './components/RevealWrapper';
function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Welcome/>
<RevealWrapper>
  <About />
</RevealWrapper>
<RevealWrapper>
    <Projects/>
    </RevealWrapper>
    <RevealWrapper>
    <Connect/>
    </RevealWrapper>
    </div>
  );
};

export default App;
