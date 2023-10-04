const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const coffeRouter = require("./router/coffes");

require("dotenv").config();

mongoose // eslint-disable-next-line no-undef
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("ERROR : ");
  });
const app = express();

app.use(cors());
app.use(express.json());
app.use(coffeRouter);

app.use((req, res) => {
  return res.status(404).json({ response: "Endpoint not exist!" });
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-undef
  console.log(`APP ${process.env.PORT} start work`)
);
