const mongoose = require("mongoose");

const AccountantSchema = new mongoose.Schema({
  license_id: {
    type: Number,
    required: true,
  },
 full_name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
});

const Accountant = mongoose.model("Accountant", AccountantSchema);

module.exports = Accountant;