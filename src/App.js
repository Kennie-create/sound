import React from 'react';
import './App.css';

function App() {
  return (
  <>
  <h1> Welcome to Sounds </h1>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 

  <section>
    <div class="grid">
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>
      <div class="button"></div>

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
