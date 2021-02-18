import React from "react";

function playAudio(url) {
  new Audio(url).play();
}

const SoundButton = (props) => {
  const { image, alt, sound } = props;
  return (
    <button
      className="button button-flip"
      onClick={() => playAudio(sound)}
    >
      <div className="card">
        <div className="side">
          <img src={image} alt={alt} />
        </div>
        <div className="back">{alt}</div>
      </div>
    </button>
  );
};

export default SoundButton;
