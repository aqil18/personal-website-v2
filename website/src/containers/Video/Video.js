// VideoContainer.js
import React from 'react';
import './VideoContainer.css'; // Import your CSS file

const VideoContainer = () => {
  return (
    <div className="flex-container">
        <video width="100%"  autoPlay loop muted preload="metadata" poster="[URL_TO_POSTER_IMAGE]">
            <source src="https://pub-7a8aa7944aa34843b95f986417b76809.r2.dev/horizontal_video.mov" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default VideoContainer;