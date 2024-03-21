const db = require("../models/index.js");

class NotesController {
  async createNote(request, response) {
    try {
      const { title, text, images, userId, background, dateNote } =
        request.body;

      const newNote = await db.Notes.create({
        title,
        text,
        images,
        userId,
        background,
        dateNote,
      });

      return response.json(newNote);
    } catch (error) {}
  }

  async getNotes(request, response) {
    try {
      const { userId } = request.body;

      const notes = await db.Notes.findAll({
        where: userId,
        order: [["id", "DESC"]],
      });

      return response.json(notes);
    } catch (error) {}
  }

  async getNote(request, response) {
    try {
      const { id } = request.params;

      const note = await db.Notes.findOne({
        where: { id: id },
      });

      return response.json(note);
    } catch (error) {}
  }

  async deleteNote(request, response) {
    try {
      const { text } = request.body;

      const note = await db.Notes.destroy({
        where: { text: text },
      });

      return response.json(note);
    } catch (error) {}
  }
}

module.exports = new NotesController();
