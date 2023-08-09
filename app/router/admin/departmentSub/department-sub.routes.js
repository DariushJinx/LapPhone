const DepartmentSubController = require("../../../http/controller/departmentSub/department-sub.controller");

const departmentSubRoutes = require("express").Router();

departmentSubRoutes.post("/add", DepartmentSubController.createDepartmentSub);

module.exports = departmentSubRoutes;
