const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

app.get("/outfit", (req, res) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "black",
    "white",
    "gray",
  ];

  res.json({
    top: _.sample(colors),
    pants: _.sample(colors),
    shoes: _.sample(colors),
  });
});

app.get("/comments/:id", async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
  } catch (err) {
    console.log(err);
  }

  res.json({ content: content });
});

app.post("/comments", async (req, res) => {
  const id = uuid();
  const content = req.body.content;

  if (!content) {
    res.sendStatus(400);
    return;
  }

  await fs.mkdir("data/comments", { recursive: true });
  await fs.writeFile(`data/comments/${id}.txt`, content);

  res.status(201).json({
    id: id,
  });
});

app.listen(3000, () => console.log("running"));
