const { default: mongoose } = require("mongoose");
const CommentSchema = require("../pbublic/public.model");

const BlogSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    short_text: { type: String, required: true },
    images: { type: [String], required: true },
    tags: { type: [String], default: [] },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    comments: { type: [CommentSchema], default: [] },
    likes: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    dislikes: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
    bookmarks: { type: [mongoose.Types.ObjectId], ref: "users", default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

BlogSchema.virtual("user_details", {
  ref: "users",
  localField: "_id",
  foreignField: "author",
});
BlogSchema.virtual("category_details", {
  ref: "categories",
  localField: "_id",
  foreignField: "category",
});
BlogSchema.virtual("bookmark_details", {
  ref: "users",
  localField: "_id",
  foreignField: "bookmarks",
});
BlogSchema.virtual("likes_details", {
  ref: "users",
  localField: "_id",
  foreignField: "likes",
});
BlogSchema.virtual("dislikes_details", {
  ref: "users",
  localField: "_id",
  foreignField: "dislikes",
});

BlogSchema.virtual("imagesURL").get(function () {
  return this.images.map(
    (image) =>
      `${process.env.BASE_URL}:${process.env.APPLICATION_PORT}/${image}`
  );
});

const BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
