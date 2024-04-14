import React, { useEffect } from 'react';
import backgroundMusic from './quiz-music-158558.mp3';

const Music = () => {
  useEffect(() => {
    const audio = document.getElementById("backgroundMusic");
    audio.play();
  }, []);

  return (
    <div className="App">
      {/* Your existing content */}

      <audio id="backgroundMusic" loop>
        <source src={backgroundMusic} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Music;
