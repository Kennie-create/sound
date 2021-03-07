import React from "react";
import "./App.css";
import SoundButton from "./components/SoundButton";

const buttons = [
  {
    image: "/images/drums.svg",
    sound: "/sounds/drums.wav",
    alt: "drums",
  },
  {
    image: "/images/violin.svg",
    sound: "/sounds/violin.wav",
    alt: "violin",
  },
  {
    image: "/images/circus.svg",
    sound: "/sounds/banjo.mp3",
    alt: "circus",
  },
  {
    image: "/images/airplane.svg",
    sound: "/sounds/airplane.wav",
    alt: "airplane",
  },
  {
    image: "/images/alarm.svg",
    sound: "/sounds/alarm.wav",
    alt: "alarm",
  },
  {
    image: "/images/applause.svg",
    sound: "/sounds/applause.wav",
    alt: "applause",
  },
  {
    image: "/images/cat.svg",
    sound: "/sounds/cat.wav",
    alt: "cat",
  },
  {
    image: "/images/dog.svg",
    sound: "/sounds/dog.wav",
    alt: "dog",
  },
  {
    image: "/images/elephant.svg",
    sound: "/sounds/elephant.flac",
    alt: "elephant",
  },
  {
    image: "/images/rain.svg",
    sound: "/sounds/rain.mp3",
    alt: "rain",
  }
];

const AllButtons = () => {
  return buttons.map((button) => {
    return (
      <SoundButton image={button.image} sound={button.sound} alt={button.alt} />
    );
  });
};
function App() {
  return (
    <>
      <h1> Welcome to Sounds </h1>
      <section>
        <div className="grid">
          <AllButtons />        
        </div>
      </section>
    </>
  );
}

export default App;
