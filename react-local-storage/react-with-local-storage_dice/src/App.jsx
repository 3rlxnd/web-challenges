import { useState } from "react";
import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
import History from "./components/History";
import "./styles.css";

// localStorage.clear()

export default function App() {

  const [rolls, setRolls] = useState(JSON.parse(localStorage.getItem('rolls')) || []);

  const handleRoll = () => {
    const newRolls = [{ value: getD6Roll(), time: Date.now() }, ...rolls]
    setRolls(newRolls);
    localStorage.setItem('rolls', [JSON.stringify(newRolls)])
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={rolls[0]?.value} onRoll={handleRoll}/>
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
