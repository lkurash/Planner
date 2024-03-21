import { getNotes } from "./actions";

import NoteForm from "./NoteForm";
import Notes from "./Notes";

import styles from "./main.module.scss";

const Main = async () => {
  const notes = await getNotes();

  return (
    <main className={styles.main}>
      <NoteForm />
      <div className={styles.displayNotes}>
        <Notes notes={notes} />
      </div>
    </main>
  );
};
export default Main;
