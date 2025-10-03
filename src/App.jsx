import { useState, useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Square } from "./components/Square";
import { Row } from "./components/Row";
import { Footer } from "./components/Footer";

function App() {
  const [words, setWords] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [win, setWin] = useState(null); // null = game ongoing, 0 = lose, 1 = win
  const [countChance, setCountChance] = useState(0);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((response) => response.json())
      .then((data) => setWords(data[0].toUpperCase()));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (win !== null) return;
      if (e.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        if (currentGuess.length === 5) {
          const coloring = [];
          let localCorrectLetters = 0;

          for (let i = 0; i < 5; i++) {
            if (currentGuess[i] === words[i]) {
              coloring[i] = "bg-green-300";
              localCorrectLetters++;
            } else if (words.includes(currentGuess[i])) {
              coloring[i] = "bg-amber-300";
            } else {
              coloring[i] = "bg-gray-300";
            }
          }

          if (localCorrectLetters === 5) {
            setWin(1);
          } else if (countChance + 1 >= 6) {
            setWin(0);
          }

          setCountChance((prev) => prev + 1);
          setGuesses((prev) => [
            ...prev,
            { letters: currentGuess, colors: coloring },
          ]);
          setCurrentGuess([]);
        }
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        if (currentGuess.length < 5) {
          setCurrentGuess((prev) => [...prev, e.key.toUpperCase()]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess]);

  return (
    <>
      <Navbar />
      <div className="p-4 mx-auto w-80 my-30">
        {/* Past guesses */}
        <Square guess={guesses} />

        {/* Current typing row */}
        <Row
          letters={currentGuess.concat(Array(5 - currentGuess.length).fill(""))}
          colors={Array(5).fill("bg-gray-200")}
        />
        {win === 1 && (
          <div className="text-green-500 text-3xl">You Win! 🎉</div>
        )}
        {win === 0 && (
          <div className="text-red-500">You Lose ! The word was:{words}</div>
        )}
        {win === null && (
          <div className="text-gray-500 text-2xl">Keep guessing...</div>
        )}
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
        <Footer />
      </footer>
    </>
  );
}

export default App;
