const coffeModel = require("../models/coffes");
let coffes = [];

const ADD_COFFE = (req, res) => {
  const coffe = new coffeModel({
    title: req.body.title,
    coffeType: req.body.coffeType,
    beanType: req.body.beanType,
    toastingLevel: req.body.toastingLevel,
    coffeRegion: req.body.coffeRegion,
    coffeAmount: req.body.coffeAmount,
    roastingCountry: req.body.roastingCountry,
    isInStock: true,
  });

  coffe
    .save()
    .then((dbResponse) => {
      return res
        .status(201)
        .json({ response: "Coffe was added", coffe: dbResponse });
    })
    .catch((err) => {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "Something went wrong!" });
    });
};
const GET_ALL_COFFES = (req, res) => {
  coffeModel.find().then((response) => {
    return res.send({ coffes: response });
  });
};

const SET_COFFE_SOLD_OUT = (req, res) => {
  // const isInStock = Boolean(req.params.status);
  const coffeIndex = coffes.findIndex((coffe) => {
    return coffe.id === req.params.id;
  });
  if (coffeIndex === -1) {
    return res.status(404).json({ response: "Coffe not found" });
  }
  //   coffes[coffeIndex].isInStock = isInStock;
  coffes[coffeIndex] = { ...coffes[coffeIndex], ...req.body };

  return res.json({ response: coffes[coffeIndex] });
};

const DELETE_COFFE = (req, res) => {
  const filteredCoffes = coffes.filter((coffe) => coffe.id !== req.params.id);
  coffes = filteredCoffes;
  return res.status(200).json({ coffes: filteredCoffes });
};
module.exports = {
  ADD_COFFE,
  GET_ALL_COFFES,
  SET_COFFE_SOLD_OUT,
  DELETE_COFFE,
};
