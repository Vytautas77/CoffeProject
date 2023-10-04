const express = require("express");
const router = express.Router();
const {
  ADD_COFFE,
  GET_ALL_COFFES,
  SET_COFFE_SOLD_OUT,
  DELETE_COFFE,
} = require("../controller/coffes");

router.post("/coffes", ADD_COFFE);

router.get("/coffes", GET_ALL_COFFES);

router.put("/coffes/:id", SET_COFFE_SOLD_OUT);

router.delete("/coffes/:id", DELETE_COFFE);

module.exports = router;
