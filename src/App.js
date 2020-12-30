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
