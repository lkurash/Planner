"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { createNote } from "./actions";

import { useDispatch } from "react-redux";
import { create } from "@/lib/features/notes/notesSlice";

import styles from "./noteForm.module.scss";

import dummyFileIcon from "./images/file_icon.png";
import dummyBrushIcon from "./images/brush_icon.png";
import dummyListIcon from "./images/list_icon.png";
import pinIcon from "./images/pin_icon.png";
import bottomFileIcon from "./images/bottom_file_icon.png";
import bottomBackgroundIcon from "./images/background_icon.png";
import bottomBellIcon from "./images/bell_icon.png";
import bottomInArchiveIcon from "./images/in_archive_icon.png";
import bottomDotsIcon from "./images/dots_icon.png";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [titleNote, setTitleNote] = useState("");
  const [textNote, setTextNote] = useState("");
  const [displayNoteForm, setDisplayNoteForm] = useState(false);
  const [formState, action] = useFormState(createNote.bind(null, textNote), {
    note: null,
  });

  useEffect(() => {
    if (formState.note) {
      dispatch(create(formState.note));
    }
  }, [formState.note]);

  return (
    <>
      {displayNoteForm ? (
        <form action={action} className={styles.noteForm}>
          <div className={styles.header}>
            <input
              id="input-note"
              className={`${styles.inputNote} ${styles.inputTitleNote}`}
              type="text"
              name="title"
              placeholder="Enter the title"
              value={titleNote}
              onChange={(e) => setTitleNote(e.target.value)}
            />

            <Image src={pinIcon} alt="pin" width={20} height={20} />
          </div>

          <div className={styles.main}>
            <input
              id="input-note"
              className={`${styles.inputNote} ${styles.inputTextNote}`}
              type="text"
              name="text"
              placeholder="Notes..."
              value={textNote}
              onChange={(e) => setTextNote(e.target.value)}
            />
          </div>

          <div className={styles.actionContainer}>
            <div className={styles.buttonsPanel}>
              <Image
                src={bottomBellIcon}
                alt="create notification"
                width={15}
                height={15}
              />
              <Image
                src={bottomBackgroundIcon}
                alt="create note with background"
                width={18}
                height={18}
              />
              <Image
                src={bottomFileIcon}
                alt="create note with picture"
                width={15}
                height={15}
              />
              <Image
                src={bottomInArchiveIcon}
                alt="note in archive"
                width={18}
                height={18}
              />
              <Image src={bottomDotsIcon} alt="menu" width={15} height={15} />
            </div>

            <button className={styles.buttonCreateNote}>
              <span>Create</span>
            </button>
          </div>
        </form>
      ) : (
        <div
          className={styles.dummyNoteForm}
          onClick={() => setDisplayNoteForm(true)}
        >
          <p>Note...</p>
          <div className={styles.actionContainer}>
            <Image
              src={dummyListIcon}
              alt="create list"
              width={20}
              height={20}
            />
            <Image
              src={dummyBrushIcon}
              alt="create note with photo"
              width={20}
              height={20}
            />
            <Image
              src={dummyFileIcon}
              alt="create note with picture"
              width={20}
              height={20}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NoteForm;
