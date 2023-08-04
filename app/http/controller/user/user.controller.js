const createHttpError = require("http-errors");
const {
  deleteInvalidPropertyInObject,
} = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");

class User extends Controller {
  async updateUserProfile(req, res, next) {
    try {
      const userID = req.user._id;
      const data = req.body;
      const BlackListFields = [
        "mobile",
        "otp",
        "bills",
        "discount",
        "Roles",
        "Courses",
      ];
      deleteInvalidPropertyInObject(data, BlackListFields);
      const updateResult = await UserModel.updateOne(
        { _id: userID },
        { $set: data }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "کاربر مورد نظر با موفقیت به روزرسانی نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "کاربر مورد نظر با موفقیت به روزرسانی شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async getAllUsers(req, res, next) {
    try {
      const { search } = req.query;
      const dataQuery = {};
      if (search) dataQuery["$text"] = { $search: search };
      const users = await UserModel.find(dataQuery);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی کاربران موجود با موفقیت بازگردانده شدند",
          users,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

const UserController = new User();

module.exports = UserController;
