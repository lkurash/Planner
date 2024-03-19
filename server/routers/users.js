const Router = require("express");
const router = new Router();

router.get("/");
router.get("/user/:id");
router.post("/user");

module.exports = router;
