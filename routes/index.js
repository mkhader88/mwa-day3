const express= require("express");
const router= express.Router();
const gamesController= require("../controllers/games.controllers");
const schoolController= require("../controllers/school.controllers");
const addController= require("../controllers/add.controllers");

router.route("/games")
.get(gamesController.getAll);
router.route("/school")
.get(schoolController.getAll);
router.route("/school/:stdIndex")
.get(schoolController.getOne);
module.exports = router;
router.route("/add/:number")
.get(addController.addNumber);

module.exports = router;