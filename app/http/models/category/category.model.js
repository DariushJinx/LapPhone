const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    images: { type: [String], default: [] },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "categories",
      default: undefined,
    },
  },
  {
    id: false,
    toJSON: {
      virtuals: true,
    },
  }
);

CategorySchema.virtual("imagesURL").get(function () {
  return this.images.map(
    (image) =>
      `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/${image}`
  );
});

CategorySchema.virtual("children", {
  ref: "categories",
  localField: "_id",
  foreignField: "parent",
});

function autoPopulate(next) {
  this.populate([{ path: "children", select: { __v: 0, id: 0 } }]);
  next();
}

CategorySchema.pre("findOne", autoPopulate).pre("find", autoPopulate);

const CategoryModel = mongoose.model("categories", CategorySchema);

module.exports = CategoryModel;
