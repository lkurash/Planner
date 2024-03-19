"use server";

export async function createNote(text, note) {
  let newNote;
  
  await fetch("http://localhost:5500/api/notes/note", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  })
    .then((response) => response.json())
    .then((note) => {
      newNote = note;
    });

  return {
    note: newNote,
  };
}

export async function getNotes() {
  const notes = fetch("http://localhost:5500/api/notes", {
    next: { revalidate: 10 },
  }).then((response) => response.json());

  return notes;
}
