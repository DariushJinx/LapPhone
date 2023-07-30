const CategoryRoutes = require("./category/category.routes");
const PermissionRoutes = require("./permission/permissioin.routes");
const RoleRoutes = require("./role/role.routes");

const AdminRoutes = require("express").Router();

AdminRoutes.use("/permission", PermissionRoutes);
AdminRoutes.use("/role", RoleRoutes);
AdminRoutes.use("/category", CategoryRoutes);

module.exports = AdminRoutes;
