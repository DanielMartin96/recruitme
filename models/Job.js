const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("job", JobSchema);
