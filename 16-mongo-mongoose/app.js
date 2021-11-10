const express = require('express');
const mongoose = require('mongoose');
const app = new express();
const cors = require('cors');
const path = require("path");

const AccountantSchema = new mongoose.Schema({
  license_id: {
    type: Number,
    required: true,
  },
  license_date: {
    type: Date,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const Accountant = mongoose.model("Accountant", AccountantSchema);

mongoose.connect('mongodb+srv://PhonebookoriDb:WsG9IKGGfG2WbtL@firstmongo.w0kdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

app.get('/cities', function(req, res) {
  Accountant.find({}).distinct('city') // distinct values
    .then((cities) => {
      res.json(cities);
    })
});

app.get('/accountants-by-city/:city_name', function(req, res) {
  Accountant.find({city: req.params.city_name})
    .then((accountants) => {
      res.json(accountants);
    })
});

app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));