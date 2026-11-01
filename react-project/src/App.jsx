import { useState } from "react";

function App() {
  const quotes = [
    "Believe in yourself!",
    "Dream big and work hard.",
    "Success starts with small steps.",
    "Never give up!",
    "Make today amazing!"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h1>Random Quote App ✨</h1>

      <h2>{quote}</h2>

      <button onClick={changeQuote}>
        New Quote
      </button>
    </div>
  );
}

export default App;


