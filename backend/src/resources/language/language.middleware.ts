import { Request, Response, NextFunction } from "express";

export function setLangCookie(req: Request, res: Response, next: NextFunction) {
  const currentLang = req.cookies.lang;

  if (!currentLang) {
    res.cookie("lang", "pt-BR", {
      httpOnly: false,
      sameSite: "lax",
      path: "/",
    });
  }

  next();
}
