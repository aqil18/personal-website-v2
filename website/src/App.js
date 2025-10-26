import './App.css';
import Navbar from "./containers/Navbar/Navbar";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Welcome/>
    <About/>
    <Projects/>
    </div>
  );
}

export default App;
