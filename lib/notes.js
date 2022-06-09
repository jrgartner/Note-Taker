const fs = require("fs");
const path = require("path");

const createNewNote = (note, notesArray) => {
  // adding a new note to notes array
  notesArray.push(note);

  // saving the notes array to db.json
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

// finding the specific note by the ID from notes array
const findById = (id, notesArray) => {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
};

// editing existing notes
const editNote = (editedNote, notesArray) => {
  // finding the index of the note to be edited
  const index = notesArray.findIndex((note) => note.id === editedNote.id);

  // removing the old note and inserts the revised note
  notesArray.splice(index, 1);
  notesArray.splice(index, 0, editedNote);

  // rewriting the db.json file with revised note
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

const removeNote = (note, notesArray) => {
  // removing the specific note from the notes array
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);

  // rewriting the db.json file with the new array
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

module.exports = { createNewNote, findById, editNote, removeNote };
