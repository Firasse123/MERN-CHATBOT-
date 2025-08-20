"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to connect to the database");
    }
};
const disconnect = async () => {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = connectDB;
//# sourceMappingURL=conncection.js.map