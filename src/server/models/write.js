const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const writeSchema = new Schema(
  {
    number: { type: Array, required: true },
    period: { type: Array, required: true },
    date: { type: String, required: true },
    tag: { type: Array, required: true },
    title: { type: String, required: true },
    content: { type: Object, required: true },
  }

);

writeSchema.set("collection", "write");

const Write = mongoose.model("write", writeSchema);

module.exports = Write;
