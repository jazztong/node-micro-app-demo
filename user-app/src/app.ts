import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.json());

// Route
app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
