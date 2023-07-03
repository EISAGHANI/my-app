import React from 'react';
import videoFile from './assets/1_entwurf.mp4';
import './VideoComponent.css'; // Import the CSS file for styling

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video className="video-element" loop autoPlay muted >
        <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
