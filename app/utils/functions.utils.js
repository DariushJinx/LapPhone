const JWT = require("jsonwebtoken");
const UserModel = require("../http/models/user/user.model");
const {
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
} = require("./constans.utils");
const createHttpError = require("http-errors");
const redisClient = require("./initRedis.utils");

function RandomNumberGenerator() {
  return ~~(Math.random() * 90000 + 10000);
}

function SignAccessToken(userID) {
  return new Promise(async (resolve, reject) => {
    const user = await UserModel.findById(userID)
    const payload = {
        mobile: user.mobile
    };
    const options = {
        expiresIn: "1d"
    };
    JWT.sign(payload, ACCESS_TOKEN_SECRET_KEY, options, (err, token) => {
        if (err) reject(createError.InternalServerError("خطای سروری"));
        resolve(token)
    })
})
}

function SignRefreshToken(userID) {
  return new Promise(async (resolve, reject) => {
    const user = await UserModel.findById(userID);
    const payload = {
      mobile: user.mobile,
    };
    const options = {
      expiresIn: "1y",
    };
    JWT.sign(payload, REFRESH_TOKEN_SECRET_KEY, options, async (err, token) => {
      if (err) throw createHttpError.InternalServerError("خطای سرور");
      await redisClient.SETEX(String(userID), 365 * 24 * 60 * 60, token);
      resolve(token);
    });
  });
}

function verifyRefreshToken(token) {
  return new Promise(async (resolve, reject) => {
    JWT.verify(token, REFRESH_TOKEN_SECRET_KEY, async (err, payload) => {
      if (err)
        throw reject(createHttpError.Unauthorized("وارد حساب کاربری خود شوید"));
      const { mobile } = payload || {};
      const user = await UserModel.findOne({ mobile }, { password: 0, otp: 0 });
      if (!user)
        throw reject(
          createHttpError.Unauthorized("حساب کاربری مورد نظر یافت نشد")
        );
      const refreshToken = await redisClient.get(String(user?._id));
      if (!refreshToken)
        throw reject(
          createHttpError.Unauthorized("ورود مجدد به حساب کاربری انجام نشد")
        );
      if (refreshToken === token) return resolve(mobile);
      reject(
        createHttpError.Unauthorized("ورود مجدد به حساب کاربری انجام نشد")
      );
    });
  });
}

function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function deleteInvalidPropertyInObject(data = {}, blackList = []) {
  const nullishData = ["", " ", "0", 0, null, undefined];
  Object.keys(data).forEach((key) => {
    if (blackList.includes(key)) delete data[key];
    if (typeof data[key] == "string") data[key] = data[key].trim();
    if (Array.isArray(data[key]) && data[key].length > 0)
      data[key] = data[key].map((item) => item.trim());
    if (Array.isArray(data[key]) && data[key].length == 0) delete data[key];
    if (nullishData.includes(data[key])) delete data[key];
  });
}

const UtilsFunctions = {
  RandomNumberGenerator,
  SignAccessToken,
  SignRefreshToken,
  verifyRefreshToken,
  copyObject,
  deleteInvalidPropertyInObject,
};

module.exports = UtilsFunctions;
