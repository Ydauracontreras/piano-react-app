import React, { Fragment } from "react";
import Instrument from "./Instrument";
import flecha from "./assets/img/descarga-arrow.svg";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut,
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote,
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="pricipal-container">
      <Container maxWidth="sm">
        <div className="title">
          <h1>React-Piano</h1>
          <p>Teclado de piano interactivo hecho con react 🎹</p>
          <div className="title-link">
            <a href="https://github.com/Ydauracontreras/piano-react-app">
              {" "}
              GITHUB
            </a>
          </div>
        </div>
        <div className="mesagge">
          <p>Pruebalo haciendo clic, tocando o usando su teclado:</p>
          <img className="flecha" src={flecha} />
        </div>
        <div className="piano-container">
          <Instrument
            instrumentName={"acoustic_grand_piano"}
            startNote={"C3"}
            endNote={"B5"}
            renderPianoKey={renderPianoKey}
            keyboardMap={{
              Q: "C3",
              2: "C#3",
              W: "D3",
              3: "D#3",
              E: "E3",
              R: "F3",
              5: "F#3",
              T: "G3",
              6: "G#3",
              Y: "A3",
              7: "A#3",
              U: "B3",
              I: "C4",
              9: "C#4",
              O: "D4",
              0: "D#4",
              P: "E4",
              Z: "F4",
              S: "F#4",
              X: "G4",
              D: "G#4",
              C: "A4",
              F: "A#4",
              V: "B4",
              B: "C5",
              H: "C#5",
              N: "D5",
              J: "D#5",
              M: "E5",
              ",": "F5",
              L: "F#5",
              ".": "G5",
              ";": "G#5",
              "/": "A5",
              "'": "A#5",
              A: "B5",
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Piano;
