const AuthController = require("../../http/controller/auth/auth.controller");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/get-otp", AuthController.getOtp);
AuthRoutes.post("/check-otp", AuthController.checkOtp);
AuthRoutes.post("/refresh-token", AuthController.refreshToken);

module.exports = AuthRoutes;
