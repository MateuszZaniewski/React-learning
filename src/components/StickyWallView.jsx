import { useState } from "react";
import NoteForm from "./NoteForm";
import add from "../assets/add.png";

export default function StickyWallView() {
  const [notes, setNotes] = useState([]);
  const [noteCreation, setNoteCreation] = useState(false);

  const getData = (data) => {
    setNotes([...notes, data]);
    console.log(notes);
  };

  const addNote = (title) => {
    const note = title;
    setNotes([...notes, note]);
  };

  return (
    <div className="my-6 w-[450px] ">
      <div className="">
        <h1 className="text-5xl font-bold ">Sticky Notes</h1>
      </div>
      <div
        onClick={() => setNoteCreation(!noteCreation)}
        className={`pt-8 gap-2 items-center ${
          !noteCreation ? "flex" : "hidden"
        }`}
      >
        <img src={add} className="h-12 w-12" />
        <span className="text-xl">Add note</span>
      </div>
      <div
        className={`pt-8 justify-between items-center ${
          noteCreation ? "flex" : "hidden"
        }`}
      >
        <span
          onClick={() => setNoteCreation(!noteCreation)}
          className="text-xl"
        >
          Cancel
        </span>
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <div className={noteCreation ? "block" : "hidden"}>
          <NoteForm
            addNote={addNote}
            onSubmit={getData}
            setNoteCreation={setNoteCreation}
            noteCreation={noteCreation}
          />
        </div>

        <ul>
          {notes.map((item, index) => {
            return (
              <div
                key={index}
                className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg lg:max-w-3xl gap-2 pb-2 w-fit`}
              >
                <span key={index}>{item[0]}</span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
