const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");
const BlogRoutes = require("./blog/blog.routes");
const CategoryRoutes = require("./category/category.routes");
const DepartmentRoutes = require("./department/department.routes");
const departmentSubRoutes = require("./departmentSub/department-sub.routes");
const OffRoutes = require("./off/off.routes");
const PermissionRoutes = require("./permission/permissioin.routes");
const ProductRoutes = require("./product/product.routes");
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
AdminRoutes.use("/product", ProductRoutes);
AdminRoutes.use("/off", OffRoutes);
AdminRoutes.use("/department", DepartmentRoutes);
AdminRoutes.use("/departmentSub", departmentSubRoutes);

module.exports = AdminRoutes;
