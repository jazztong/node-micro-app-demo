import prisma from "./client";
import express from "express";
import { StatusCodes } from "http-status-codes";

const app = express();

app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.status(200).send("Healthy");
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async function (req, res) {
  try {
    const userData = req.body;
    const user = await prisma.user.create({
      data: userData,
    });
    res.json(user);
  } catch (e) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: e.message,
    });
  }
});

export { app };
