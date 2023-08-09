const createHttpError = require("http-errors");
const DepartmentSubModel = require("../../models/department-sub/department-sub.model");
const {
  departmentSubValidation,
} = require("../../validation/department/department.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");

class DepartmentSub {
  async createDepartmentSub(req, res, next) {
    try {
      const validation = await departmentSubValidation.validateAsync(req.body);
      const { title, parent } = validation;
      const departmentSub = await DepartmentSubModel.create({ title, parent });
      if (!departmentSub)
        throw createHttpError.InternalServerError(
          "زیر دپارتمانت مورد نظر ایجاد نشد"
        );
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "زیر دپارتمانت مورد نظر با موفقیت ایجاد شد",
          departmentSub,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

const DepartmentSubController = new DepartmentSub();

module.exports = DepartmentSubController;
