import React from "react";

const PlayButton = ({ link }) => {
  return (
    <div>
      <a
        id="play-video"
        className="video-play-button"
        href={link}
        data-toggle="modal"
        data-target="#savoybeachhotel"
      >
        <span></span>
      </a>
    </div>
  );
};

export default PlayButton;
