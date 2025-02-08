const express = require("express");
const router = express.Router();

const players = [
  {
    id: 1,
    name: "Lebron",
    team: "Lakers",
  },
  {
    id: 2,
    name: "Kobe",
    team: "Lakers",
  },
];

router.get("/", (req, res) => {
  res.json(players);
});

module.exports = router;
