
import React from 'react';

function App() {
  return (
    <main>
      <div>
        <header>
          <RandomButton />
          <QuoteAuthor />
        </header>
        <Quote />
        <button type="button">
          <h3>Bill gates</h3>
          <div>Business</div>
        </button>
        <footer>Created by ennency - devChallenges.io</footer>
      </div>
    </main>
  );
}

export const Quote = (quote) => {
  return (
    <div>
      {quote}
    </div>
  )
}

export const RandomButton = () => <button type="button">Prova</button>;

export const QuoteAuthor = (name) => <h1>{name}</h1>;
export default App;
