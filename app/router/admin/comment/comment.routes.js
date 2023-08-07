const CommentController = require("../../../http/controller/comment/comment.controller");
const {
  verifyAccessToken,
} = require("../../../http/middlewares/verifyAccessToken.middleware");

const commentRoutes = require("express").Router();

commentRoutes.post("/add", CommentController.createComment);
commentRoutes.get("/list", CommentController.getAllComments);
commentRoutes.patch("/show/:id", CommentController.showComment);
commentRoutes.patch("/answer/:id", CommentController.createAnswer);
commentRoutes.delete("/remove/:id", CommentController.removeComment);

module.exports = commentRoutes;
