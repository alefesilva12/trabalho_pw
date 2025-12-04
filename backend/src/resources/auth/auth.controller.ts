import { Request, Response } from "express";
import { authService } from "./auth.service";

export const authController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await authService.login(email, password);

    req.session.userId = user.id;
    req.session.userType = user.userType?.name;

    return res.status(200).json({
      message: "Logged in",
      userId: user.id,
      userType: user.userType?.name,
    });
  },

  async logout(req: Request, res: Response) {
    req.session.destroy(() => {});
    return res.status(200).json({ message: "Logged out" });
  },
};
