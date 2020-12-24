import React from "react";
import "./App.css";
import SoundButton from "./components/SoundButton";

const buttons = [
  {
    image: "/images/drums.svg",
    sound: "/sounds/mixkit-heavy-rain-loop-1243.wav",
    alt: "drums",
  },
  {
    image: "/images/drums.svg",
    sound: "/sounds/mixkit-heavy-rain-loop-1243.wav",
    alt: "drums",
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
