import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index";
import postsRouter from "./routes/products";
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.json());

// Route
app.use("/", indexRouter);
app.use("/products", postsRouter);

export default app;
