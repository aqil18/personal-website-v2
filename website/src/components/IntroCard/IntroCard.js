// Displays greeting
import "./Intro.css";

function IntroCard({ username }) {
  return (
    <h1 className="container">Hi, my name is {username}</h1>
  );
}
export default IntroCard;