const createHttpError = require("http-errors");
const {
  ListOfImagesForRequest,
  deleteFileInPublic,
  copyObject,
  deleteInvalidPropertyInObject,
  getComment,
} = require("../../../utils/functions.utils");
const ProductModel = require("../../models/product/product.model");
const {
  ProductValidation,
} = require("../../validation/product/product.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");
const { default: mongoose } = require("mongoose");

class Product extends Controller {
  async addProduct(req, res, next) {
    try {
      const validation = await ProductValidation.validateAsync(req.body);
      const images = ListOfImagesForRequest(
        req?.files || [],
        validation.fileUploadPath
      );
      const supplier = req.user._id;
      const {
        title,
        short_title,
        text,
        short_text,
        category,
        tags,
        colors,
        count,
        price,
        discount,
      } = validation;
      const product = await ProductModel.create({
        title,
        short_title,
        text,
        short_text,
        category,
        tags,
        colors,
        count,
        price,
        discount,
        images,
        supplier,
      });
      console.log("object : ", req.body);
      if (!product)
        throw createHttpError.InternalServerError(
          "محصول مورد نظر با موفقیت ایجاد نشد"
        );
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "محصول مورد نظر با موفقیت ایجاد شد",
          product,
        },
      });
    } catch (err) {
      deleteFileInPublic(req.body.images);
      next(err);
    }
  }
  async addFeaturesForProduct(req, res, next) {
    try {
      const { field } = req.params;
      const validation = await ProductValidation.validateAsync(req.body);
      const { feature_title, feature_description } = validation;
      const product = await this.findProductWithIDOrTitle(field);
      const updateResult = await ProductModel.updateOne(
        { _id: product._id },
        {
          $push: {
            "features.feature_detail": { feature_title, feature_description },
          },
        }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "جزئیاتی برای محصول اضافه نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "جزئیات برای محصول با موفقیت اضافه شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async removeFeature(req, res, next) {
    try {
      const { productID } = req.params;
      const product = await ProductModel.findById(productID);
      const updateResult = await ProductModel.updateOne(
        { _id: product._id },
        {
          $pull: {
            "features.feature_detail": product.features.feature_detail[0],
          },
        }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "حذف ویژگی محصول مورد نظر با موفقیت انجام نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "حذف ویژگی محصول مورد نظر با موفقیت انجام شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async removeProduct(req, res, next) {
    try {
      const { field } = req.params;
      const product = await this.findProductWithIDOrTitle(field);
      const removeResult = await ProductModel.deleteOne({ _id: product._id });
      if (!removeResult.deletedCount)
        throw createHttpError.InternalServerError(
          "حذف محصول مورد نظر با موفقیت انجام نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "حذف محصول مورد نظر با موفقیت انجام شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async getOneProduct(req, res, next) {
    try {
      const { field } = req.params;
      const product = await this.findProductWithIDOrTitle(field);
      if (!product) throw createHttpError.NotFound("محصول مورد نظر یافت نشد");
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "محصول مورد نظر با موفقیت بازگردانی شد",
          product,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { field } = req.params;
      const product = await this.findProductWithIDOrTitle(field);
      if (req?.body?.fileUploadPath && req?.files) {
        ListOfImagesForRequest(req?.files || [], req.body.fileUploadPath);
      }
      const ProductBlackList = [
        "bookmarks",
        "likes",
        "dislikes",
        "comments",
        "supplier",
        "colors",
      ];
      const data = copyObject(req.body);
      deleteInvalidPropertyInObject(data, ProductBlackList);
      const updateResult = await ProductModel.updateOne(
        { _id: product._id },
        { $set: data }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "محصول مورد نظر با موفقیت به روزرسانی نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "محصول مورد نظر با موفقیت به روزرسانی شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async listOfProduct(req, res, next) {
    try {
      const products = await ProductModel.aggregate([{ $match: {} }]);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی محصولات موجود با موفقیت بازگردانی شدند",
          products,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async searchOfProduct(req, res, next) {
    try {
      const search = req?.query?.search;
      let products;
      if (search) {
        products = await ProductModel.aggregate([
          {
            $match: { $text: { $search: new RegExp(search, "ig").toString() } },
          },
        ]);
      }
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "بنا به جستجوی مورد نظر اطلاعات بازگردانده شدند",
          products,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async likedProduct(req, res, next) {
    try {
      const { productID } = req.params;
      await this.findProductWitId(productID);
      const user = req.user;
      const likesProduct = await ProductModel.findOne({
        _id: productID,
        likes: user._id,
      });
      const dislikesProduct = await ProductModel.findOne({
        _id: productID,
        dislikes: user._id,
      });

      const findQueryForLikesProduct = likesProduct
        ? { $pull: { likes: user._id } }
        : { $push: { likes: user._id } };
      const findQueryForDislikesProduct = dislikesProduct && {
        $pull: { dislikes: user._id },
      };
      await ProductModel.updateOne(
        { _id: productID },
        findQueryForLikesProduct
      );
      let message;
      if (!likesProduct) {
        if (dislikesProduct) {
          await ProductModel.updateOne(
            { _id: productID },
            findQueryForDislikesProduct
          );
        }
        message = "پسندیدن محصول با موفقیت انجام شد";
      } else message = "پسندیدن محصول با موفقیت لغو شد";
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async dislikedProduct(req, res, next) {
    try {
      const { productID } = req.params;
      await this.findProductWitId(productID);
      const user = req.user;
      const likesProduct = await ProductModel.findOne({
        _id: productID,
        likes: user._id,
      });
      const disLikesProduct = await ProductModel.findOne({
        _id: productID,
        dislikes: user._id,
      });
      const findQueryForDislikesProduct = disLikesProduct
        ? { $pull: { dislikes: user._id } }
        : { $push: { dislikes: user._id } };
      const findQueryForLikesProduct = likesProduct && {
        $pull: { likes: user._id },
      };
      await ProductModel.updateOne(
        { _id: productID },
        findQueryForDislikesProduct
      );
      let message;
      if (!disLikesProduct) {
        if (likesProduct) {
          await ProductModel.updateOne(
            { _id: productID },
            findQueryForLikesProduct
          );
        }
        message = "نپسندیدن محصول با موفقیت انجام شد";
      } else message = "نپسندیدن محصول با موفقیت لغو شد";
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async bookmarkedProduct(req, res, next) {
    try {
      const { productID } = req.params;
      const user = req.user;
      await this.findProductWitId(productID);
      const bookmarkedBlog = await ProductModel.findOne({
        _id: productID,
        bookmarks: user._id,
      });
      const updateQuery = bookmarkedBlog
        ? { $pull: { bookmarks: user._id } }
        : { $push: { bookmarks: user._id } };
      await ProductModel.updateOne({ _id: productID }, updateQuery);
      let message;
      if (!bookmarkedBlog)
        message = "محصول مورد نظر به لیست علاقه مندی های شما اضافه شد";
      else message = "محصول مورد نظر از لیست علاقه مندی های شما حذف شد";
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async createCommentForProduct(req, res, next) {
    try {
      const { productID } = req.params;
      const user = req.user;
      const { comment, parent } = req.body;
      if (!mongoose.isValidObjectId(productID))
        throw createHttpError.BadGateway("شناسه محصول مورد نظر صحیح نمی باشد");
      if (parent && mongoose.isValidObjectId(parent)) {
        const answerComment = await getComment(ProductModel, parent);
        let message;
        if (answerComment && answerComment?.openToComment) {
          await ProductModel.updateOne(
            {
              _id: productID,
              "comments._id": parent,
            },
            {
              $push: {
                "comments.$.answers": {
                  comment,
                  user: user._id,
                  show: false,
                  openToComment: false,
                },
              },
            }
          );
          message = "پاسخ شما با موفقیت ثبت شد";
        } else message = "پاسخ شما مجاز نیست";

        return res.status(HttpStatus.CREATED).json({
          statusCode: HttpStatus.CREATED,
          data: {
            message,
          },
        });
      } else {
        await ProductModel.updateOne(
          { _id: productID },
          {
            $push: {
              comments: {
                comment,
                user: user._id,
                show: false,
                openToComment: true,
              },
            },
          }
        );
      }
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message:
            "کامنت شما با موفقیت ثبت شد || پس از تایید در وبسایت قرار میگیرد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  // async findFeatureInProduct(field, featureTitle) {
  //   const findResult = await ProductModel.findOne(
  //     {
  //       _id: field,
  //       "features.feature_detail.map((item) => item.feature_title)":
  //         featureTitle,
  //     },
  //     { "features.$": 1 }
  //   );
  //   const userDetail = copyObject(findResult);
  //   console.log("userDetail : ", userDetail);
  //   return userDetail?.features?.feature_detail?.[0];
  // }

  async findFeatureInProduct(field, featureTitle) {
    const findResult = await ProductModel.findOne(
      { _id: field, "features.feature_detail.feature_title": featureTitle },
      { "features.$": 1 }
    );
    const userDetail = copyObject(findResult);
    return userDetail?.features?.feature_detail?.[0];
  }

  async findProductWitId(id) {
    const product = await ProductModel.findById(id);
    if (!product) throw createHttpError.NotFound("محصول مورد نظر یافت نشد");
    return product;
  }

  async findProductWithIDOrTitle(field) {
    const findQuery = mongoose.isValidObjectId(field)
      ? { _id: field }
      : { title: field };
    const product = await ProductModel.findOne(findQuery);
    if (!product) throw createHttpError.NotFound("محصول مورد نظر یافت نشد");
    return product;
  }
}

const ProductController = new Product();

module.exports = ProductController;