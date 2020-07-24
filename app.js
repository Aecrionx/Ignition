const express = require("express");

const userRouter = require("./router.js");


const app = express();


app.use(userRouter);


module.exports = app;