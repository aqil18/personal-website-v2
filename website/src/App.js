import './App.css';
import Navbar from "./containers/Navbar/Navbar";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Connect from './containers/Connect/Connect';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Welcome/>
    <About/>
    <Projects/>
    <Connect/>
    </div>
  );
};

export default App;
