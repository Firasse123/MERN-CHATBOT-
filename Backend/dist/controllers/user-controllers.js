"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/User");
const { createToken } = require("../utils/token-manager");
const bcrypt_1 = require("bcrypt");
const { COOKIE_NAME } = require("../utils/constants");
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ message: "OK", data: users });
    }
    catch (error) {
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
//user Signup
const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.find({ email });
        if (existingUser) {
            return res.status(401).send("User already registered");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User created successfully", data: user });
    }
    catch (error) {
        res.status(500).json({ message: "Error", cause: error.message });
    }
};
//userLogin
const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/"
        });
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires,
            httpOnly: true,
            signed: true
        });
        return res.status(200).json({ message: "Login successful", data: user });
    }
    catch (error) {
        res.status(500).json({ message: "Error", cause: error.message });
    }
};
//create token and store cookie
module.exports = { getAllUsers, userSignup, userLogin };
//# sourceMappingURL=user-controllers.js.map