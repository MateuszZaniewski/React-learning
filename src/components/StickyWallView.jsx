import { useState } from "react";
import NoteForm from "./NoteForm";
import add from "../assets/add.png";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";
import checkIcon from "../assets/check.png";

export default function StickyWallView({ notes, setNotes }) {
  const [noteCreation, setNoteCreation] = useState(false);

  const getData = (data) => {
    setNotes([...notes, data]);
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const updatedList = notes.filter((note) => note.id !== id);
    setNotes(updatedList);
  };

  const handleTitleChange = (e, id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: e.target.value } : note
    );
    setNotes(updatedNotes);
  };

  const handleTextChange = (e, id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: e.target.value } : note
    );
    setNotes(updatedNotes);
  };

  const handleEditClick = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, edit: !note.edit } : note
    );
    setNotes(updatedNotes);
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
      ></div>
      <div className="flex flex-col justify-start overflow-y-auto max-h-[75vmin]">
        <div className={noteCreation ? "block" : "hidden"}>
          <NoteForm
            addNote={addNote}
            onSubmit={getData}
            setNoteCreation={setNoteCreation}
            noteCreation={noteCreation}
            notes={notes}
          />
        </div>

        <ul className="py-4 flex flex-col gap-4">
          {notes.map((item, index) => {
            return (
              <div
                key={index}
                className={`py-4 border w-[350px] h-auto ${item.color} rounded-xl overflow-x-hidden no-scrollbar`}
              >
                <div className="px-4 py-3 flex flex-col gap-4 relative">
                  <img
                    src={editIcon}
                    onClick={() => handleEditClick(item.id)}
                    className={`h-4 w-4 absolute top-0 right-4 ${
                      item.edit ? "hidden" : "block"
                    }`}
                  />
                  <img
                    src={deleteIcon}
                    onClick={() => deleteNote(item.id)}
                    className={`h-6 w-6 absolute top-0 right-14 ${
                      !item.edit ? "hidden" : "block"
                    }`}
                  />
                  <img
                    src={checkIcon}
                    onClick={() => handleEditClick(item.id)}
                    className={`h-6 w-6 absolute top-0 right-4 ${
                      !item.edit ? "hidden" : "block"
                    }`}
                  />
                  {item.edit ? (
                    <>
                      <input
                        className="resize-none h-[5vmin] rounded-lg py-1 px-2 mt-5"
                        onChange={(e) => handleTitleChange(e, item.id)}
                        value={item.title}
                      ></input>
                      <textarea
                        className="resize-none h-[20vmin] rounded-lg py-1 px-2"
                        onChange={(e) => handleTextChange(e, item.id)}
                        value={item.text}
                      ></textarea>
                    </>
                  ) : (
                    <div className="flex flex-col gap-6 overflow-auto no-scrollbar break-words">
                      <span
                        className="text-2xl font-bold whitespace-normal"
                        key={item.id}
                      >
                        {item.title}
                      </span>
                      <span className="text-lg leading-6 whitespace-pre-line">
                        {item.text}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
