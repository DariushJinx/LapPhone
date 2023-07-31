const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, default: "" },
});

const MenuModel = mongoose.model("menus", MenuSchema);

module.exports = MenuModel;
