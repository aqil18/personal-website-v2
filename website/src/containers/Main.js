import Navbar from "./Navbar/Navbar";
import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Projects from "./Projects/Projects";
import "./Main.css";
export default function Main() {
    return (
        <div className="main">
        <Navbar/>
        <Welcome/>
        <About/>
        <Projects/>
        </div>
    );
}