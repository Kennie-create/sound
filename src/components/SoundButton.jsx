import React from "react";

function playAudio(url){
  new Audio(url).play()
}

const SoundButton = (props) => {
  const {image,alt,sound} = props
  return (
    <button
      className="button button-hover-animation"
      onClick={() => playAudio(sound)}
    >
      <img src={image} alt={alt} />
    </button>
  );
};

export default SoundButton;