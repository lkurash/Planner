const Router = require("express");
const router = new Router();

const notesController = require("../controllers/notesController");

router.get("", notesController.getNotes);
router.get("/note/:id", notesController.getNote);
router.post("/note", notesController.createNote);
router.delete("/note/delete", notesController.deleteNote);


module.exports = router;
