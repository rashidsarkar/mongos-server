const { Schema } = require("mongoose");
const ServiceSchema = new Schema({
  title: {
    type: String,
  },
  service_ID: {
    type: Number,
    required: true,
  },
  service_Name_With_req: {
    name: String,
    required: true,
  },
  service_Name_NO_req: {
    name: String,
  },
  facility: [
    {
      name: String,
      required: true,
    },
  ],
});
const Service = mongoose.model("Service", ServiceSchema);
