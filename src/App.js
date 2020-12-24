import React from 'react';
import './App.css';

function playAudio(url){
  new Audio(url).play()
}
function App() {
  return (
  <>
  <h1> Welcome to Sounds </h1>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 

  <section>
    <div className="grid">
     
      <button className="button" onClick={() => playAudio("/sounds/mixkit-heavy-rain-loop-1243.wav")}><img  src="/images/drums.svg" alt="drums"/></button >
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>
      <button className="button"></button>

    </div>
  </section>

  <figure>
    <figcaption>Listen here:</figcaption>
    <audio
        controls
        src="mixkit-heavy-rain-loop-1243.wav">
        Your browser does not support the audio element.
    </audio>
</figure>

</>
  );
}

export default App;
