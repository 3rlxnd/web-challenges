import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click</Button>
      <Button>Me</Button>
      <Button>Real</Button>
      <Button>Good</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
