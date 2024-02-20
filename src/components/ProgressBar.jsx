import { useState } from "react";
import "./styles.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); // tengo traccia dell'avanzamento della barra

  const move = () => {
    let length = 0;
    const id = setInterval(() => {
      if (length >= 100) {
        clearInterval(id);
      } else {
        length++;
        setProgress(length);
      }
    }, 10);
  };

  return (
    <div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
      <button onClick={move}>Avanza</button>
    </div>
  );
};

export default ProgressBar;
