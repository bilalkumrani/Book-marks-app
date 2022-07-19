const express = require("express");
const router = express.Router();
const add = require("../Controllers/addController");
const remove = require("../Controllers/removeController");
const getAll = require("../Controllers/getAllController");

router.post("/add", add);
router.post("/remove", remove);
router.get("/all", getAll);

module.exports = router;
