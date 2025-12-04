import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const session = req.session as any;

  if (session.userType !== "admin") {
    return res.status(403).json({ error: "Only admins can access this route" });
  }

  next();
};
