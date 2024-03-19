const Note = ({ note }) => {
  return (
    <div id="note">
      <h2>{note.title}</h2>
      <button></button>
      <p className="note-text">{note.text}</p>
      <div></div>
    </div>
  );
};
export default Note;
