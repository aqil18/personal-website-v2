// Takes data from portfolio
// Takes component for intro
// Passes data as props to intro

// Render IntroCard
import IntroCard from "../../components/IntroCard/IntroCard";
import {greeting} from "../../portfolio";
import Video from "../../containers/Welcome/Video/Video";

export default function Welcome() {
    return <section id="welcome">
        <div>
        <Video/>
        <IntroCard username={greeting.username}/>
    </div>
    </section>;
}