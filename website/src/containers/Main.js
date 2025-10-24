import Intro from "./Welcome/Welcome";
import Video from "./Welcome/Video/Video";
import Portfolio from "./Portfolio/Portfolio";
import "./Main.css";
export default function Main() {
    return (
        <div className="main">
        <Intro/>
        <Video/>
        <Portfolio/>
        </div>
    );
}