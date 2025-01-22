import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  const [note, setNote] = useState(localStorage.getItem('notes') || "");
  const [font, setFont] = useState(localStorage.getItem('font') || "system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
    localStorage.setItem('notes', newNote)
  }

  function handleFontChange(newFont) {
    setFont(newFont);
    localStorage.setItem('font', newFont)
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
