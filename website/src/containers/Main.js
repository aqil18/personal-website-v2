import Intro from "./Intro/Intro";

export default function Main() {
    return (
        <div className="main">
        <Intro />
        <video width="20%"  autoPlay loop muted preload="metadata" poster="[URL_TO_POSTER_IMAGE]">
            <source src="https://pub-7a8aa7944aa34843b95f986417b76809.r2.dev/portrait_pics.mov" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        </div>
    );
}