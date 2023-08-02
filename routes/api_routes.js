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
router.post("/notes", (req, res) => {
  store
    .postNotes(req.body)
    .then((newNote) => {
      return res.json(newNote);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});
router.delete("/notes/:id", (req, res) => {
  store
    .deleteNote(req.params.id)
    .then(() => {
      res.json({ response: "deleted note id:" + req.params.id });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

module.exports = router;
