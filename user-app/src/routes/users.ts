import express from "express";
import prisma from "../client";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

/* POST users. */
router.post("/", async (req, res) => {
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

export default router;
