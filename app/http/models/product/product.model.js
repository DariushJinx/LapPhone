const mongoose = require("mongoose");
const CommentSchema = require("../pbublic/public.model");

const FeatureSchema = new mongoose.Schema({
  feature_title: { type: String, required: true },
  feature_description: { type: String, required: true },
});

const Features = new mongoose.Schema({
  feature_detail: { type: [FeatureSchema], default: [] },
});

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    short_title: { type: String, required: true },
    text: { type: String, required: true },
    short_text: { type: String, required: true },
    images: { type: [String], required: true },
    tags: { type: [String], default: [] },
    category: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    comments: { type: [CommentSchema], default: [] },
    likes: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    dislikes: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    bookmarks: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    count: { type: Number },
    supplier: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    features: { type: Features },
    colors: { type: [String], default: [] },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

ProductSchema.index({
  title: "text",
  short_title: "text",
  text: "text",
  short_text: "text",
  tags: "text",
});

ProductSchema.virtual("imagesURL").get(function () {
  return this.images.map((image) => {
    return `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/${image}`;
  });
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
