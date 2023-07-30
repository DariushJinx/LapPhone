const CategoryController = require("../../../http/controller/category/category.controller");

const CategoryRoutes = require("express").Router();

CategoryRoutes.post("/add", CategoryController.addCategory);
CategoryRoutes.get("/list", CategoryController.getAllCategories);
CategoryRoutes.get("/getOne/:field", CategoryController.getOneCategory);
CategoryRoutes.get("/children/:parent", CategoryController.getChildrenOfParent);
CategoryRoutes.delete("/remove/:field", CategoryController.removeCategory);
CategoryRoutes.patch("/update/:field", CategoryController.updateCategoryTitle);

module.exports = CategoryRoutes;
