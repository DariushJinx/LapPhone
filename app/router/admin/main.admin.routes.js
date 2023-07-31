const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");
const BlogRoutes = require("./blog/blog.routes");
const CategoryRoutes = require("./category/category.routes");
const PermissionRoutes = require("./permission/permissioin.routes");
const RoleRoutes = require("./role/role.routes");

const AdminRoutes = require("express").Router();

AdminRoutes.use(
  "/permission",
  checkPermission([PERMISSIONS.ADMIN]),
  PermissionRoutes
);
AdminRoutes.use("/role", checkPermission([PERMISSIONS.ADMIN]), RoleRoutes);
AdminRoutes.use(
  "/category",
  checkPermission([PERMISSIONS.ADMIN]),
  CategoryRoutes
);
AdminRoutes.use("/blog", checkPermission([PERMISSIONS.USER]), BlogRoutes);

module.exports = AdminRoutes;
