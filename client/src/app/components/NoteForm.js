"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { createNote } from "./actions";

import { useDispatch } from "react-redux";
import { create } from "@/lib/features/notes/notesSlice";

import styles from "./noteForm.module.scss";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [formState, action] = useFormState(createNote.bind(null, text), {
    note: null,
  });

  useEffect(() => {
    if (formState.note) {
      dispatch(create(formState.note));
    }
  }, [formState.note]);

  return (
    <form action={action}>
      <input
        id="input-note"
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        id="create-note"
        type="submit"
        loading="Creating ..."
        className={styles.buttonCreateNote}
      >
        Create note
      </button>
    </form>
  );
};

export default NoteForm;
