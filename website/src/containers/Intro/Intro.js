// Takes data from portfolio
// Takes component for intro
// Passes data as props to intro

// Render IntroCard
import IntroCard from "../../components/IntroCard/IntroCard";
import { portfolio } from "../../portfolio";

export default function Intro() {
    return <IntroCard username={portfolio.greeting}/>;
}