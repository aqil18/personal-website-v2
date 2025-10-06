// Displays greeting
import "./Intro.css";

function IntroCard({ username }) {
  return (
    <h2 className="container">Hi, my name is {username}</h2>
  );
}
export default IntroCard;