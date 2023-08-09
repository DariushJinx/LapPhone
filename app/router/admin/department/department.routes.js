const DepartmentController = require("../../../http/controller/department/department.controller");

const DepartmentRoutes = require("express").Router();

DepartmentRoutes.post("/add", DepartmentController.createDepartment);
DepartmentRoutes.delete(
  "/remove/:field",
  DepartmentController.removeDepartment
);
DepartmentRoutes.patch("/update/:field", DepartmentController.updateDepartment);

module.exports = DepartmentRoutes;
