const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

module.exports = router;
