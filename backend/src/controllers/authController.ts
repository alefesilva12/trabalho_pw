import { Request, Response } from "express";
import { login } from "../services/authService";

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await login(email, password);
    return res.json(result);
  } catch (error) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
}
