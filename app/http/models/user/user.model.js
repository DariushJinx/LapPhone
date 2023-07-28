const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productID: { type: mongoose.Types.ObjectId, ref: "products" },
  count: { type: Number, default: 1 },
});

const BasketSchema = new mongoose.Schema({
  products: { type: [ProductSchema], default: [] },
});

const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    username: { type: String, lowercase: true },
    email: { type: String, lowercase: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String },
    otp: {
      type: Object,
      default: {
        code: 0,
        expiresIn: 0,
      },
    },
    bills: { type: [], default: [] },
    discount: { type: Number, default: 0 },
    birthday: { type: String },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    Products: { type: [mongoose.Types.ObjectId], ref: "products", default: [] },
    basket: { type: BasketSchema },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.index({
  first_name: "text",
  last_name: "text",
  username: "text",
  mobile: "text",
  email: "text",
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
