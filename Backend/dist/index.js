"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("dotenv").config();
const connectDB = require("./db/conncection");
const morgan = require("morgan");
const app = express();
const router = require("./routes/index");
const cookieParser = require("cookie-parser");
//middlewares 
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in production
app.use(morgan("dev"));
app.use("/api/v1", router);
app.get("/hello", (req, res) => {
    res.send("Hello World");
});
//connections ans listeners
const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Open and Connected to the Database on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map