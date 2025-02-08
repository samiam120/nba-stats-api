const express = require("express");
const app = express();
const port = 3000;

const playerRouter = require("./routes/players");

app.get("/", (req, res) => {
  console.log("here");
  res.send("user");
});

app.use("/players", playerRouter);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
