const { Schema } = require("mongoose");
const ServiceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});
