import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hash },
    });

    res.status(201).json(user);

  } catch (e) {
    console.error("CreateUser error:", e);
    res.status(500).json({ error: "Internal server error" });
  }
}