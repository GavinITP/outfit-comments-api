const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/outfit", (req, res) => {
  res.send("working!!");
});

app.listen(3000, () => console.log("running"));
