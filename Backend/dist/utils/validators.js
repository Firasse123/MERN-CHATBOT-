"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        res.status(422).json({ errors: errors.array() });
    };
};
const signupValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
];
const loginValidator = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("password").trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
];
module.exports = { validate, signupValidator, loginValidator };
//# sourceMappingURL=validators.js.map