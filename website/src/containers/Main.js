import Intro from "./Intro/Intro";

export default function Main() {
    return (
        <div className="main">
        <Intro />
        <video width="100%" controls preload="metadata" poster="[URL_TO_POSTER_IMAGE]">
            <source src="https://[YOUR_R2_PUBLIC_ENDPOINT]/my-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        </div>
    );
}