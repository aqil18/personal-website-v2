// Takes data from portfolio
// Takes component for intro
// Passes data as props to intro

// Render IntroCard
import IntroCard from "../../components/IntroCard/IntroCard";
import {greeting} from "../../portfolio";

export default function Welcome() {
    return <IntroCard username={greeting.username}/>;
}