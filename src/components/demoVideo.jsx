import React from "react";

const DemoVideo = () => {
  return (
    <div className="demoVideo">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wrdAEmNvEj4"
        title="YouTube video player"
        frameBorder="0"
        id="videoDemonstration"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default DemoVideo;
