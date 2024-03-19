const Router = require("express");
const router = new Router();

const userRouter = require("./users");
const notesRouter = require("./notes");

router.use("/users", userRouter);
router.use("/notes", notesRouter);

module.exports = router;
