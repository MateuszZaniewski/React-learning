import { useState } from "react";
import NoteForm from "./NoteForm";

export default function StickyWallView() {
  const [notes, setNotes] = useState([]);
  const [noteCreation, setNoteCreation] = useState(false);

  const addNote = (title) => {
    const note = title;
    setNotes([...notes, note]);
  };

  return (
    <div className="my-6 ">
      <div className="">
        <h1 className="text-5xl font-bold ">Sticky Notes</h1>
      </div>
      <div className="pt-8">
        <button
          onClick={() => setNoteCreation(!noteCreation)}
          className="px-2 py-1 border rounded-xl border-green-300 bg-green-300 text-xl"
        >
          Add new note
        </button>
      </div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <div className={noteCreation ? "block" : "hidden"}>
          <NoteForm />
        </div>

        {/* <ul>
          {notes.map((item, index) => {
            return (
              <div
                key={index}
                className={`pt-2 flex justify-start items-center max-w-sm md:max-w-lg lg:max-w-3xl gap-2 pb-2 w-fit`}
              >
                <span key={index}>{item}</span>
              </div>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}
