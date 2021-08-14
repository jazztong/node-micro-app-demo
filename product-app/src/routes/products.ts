import express from "express";
import prisma from "../client";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  const users = await prisma.product.findMany();
  res.json(users);
});

/* POST users. */
router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const user = await prisma.product.create({
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
