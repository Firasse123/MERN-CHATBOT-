"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter = require("express").Router();
const { getAllUsers, userSignup, userLogin } = require("../controllers/user-controllers");
const { validate, signupValidator, loginValidator } = require("../utils/validators");
userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userLogin);
module.exports = userRouter;
//# sourceMappingURL=user-routes.js.map