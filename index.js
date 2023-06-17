const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

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

app.listen(3000, () => console.log("running"));
