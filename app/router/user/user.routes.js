const UserController = require("../../http/controller/user/user.controller");

const UserRoutes = require("express").Router();

UserRoutes.patch("/update-profile", UserController.updateUserProfile);
UserRoutes.get("/list", UserController.getAllUsers);

module.exports = UserRoutes;
