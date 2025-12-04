import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const session = req.session as any;

  if (!session.userId) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  next();
};
