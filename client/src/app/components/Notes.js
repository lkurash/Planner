"use client";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAll } from "@/lib/features/notes/notesSlice";

import Note from "./Note";

const Notes = ({ notes }) => {
  const [allNotes, setNotes] = useState([]);
  const notesStore = useSelector((state) => state.notesStore);

  useEffect(() => {
    if (notesStore) {
      setNotes([...notesStore, ...notes]);
    }
  }, [notesStore]);

  return (
    <div>
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default Notes;
