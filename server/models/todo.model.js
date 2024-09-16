const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const todoSchema = new mongoose.Schema({
  _id: { type: Number },
  todoName: { type: String },
  isCompleted: { type: Boolean, default: false },
});

todoSchema.plugin(AutoIncrement, { id: "todo_counter", inc_field: "_id" });

module.exports = mongoose.model("Names", todoSchema);
