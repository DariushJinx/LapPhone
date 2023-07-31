const {
  verifyAccessToken,
} = require("../http/middlewares/verifyAccessToken.middleware");
const AdminRoutes = require("./admin/main.admin.routes");
const AuthRoutes = require("./auth/auth.routes");
const HomeRoutes = require("./home/home.routes");
const MenuRoutes = require("./menu/menu.routes");

const AllRoutes = require("express").Router();

AllRoutes.use("/", HomeRoutes);
AllRoutes.use("/auth", AuthRoutes);
AllRoutes.use("/admin", verifyAccessToken, AdminRoutes);
AllRoutes.use("/menu", MenuRoutes);

module.exports = AllRoutes;
