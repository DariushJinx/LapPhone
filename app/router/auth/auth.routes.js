const AuthController = require("../../http/controller/auth/auth.controller");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/get-otp", AuthController.getOtp);

module.exports = AuthRoutes;
