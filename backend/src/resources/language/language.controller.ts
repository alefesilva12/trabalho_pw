import { Request, Response } from "express";

const SUPPORTED_LANGS = ["pt-BR", "en-US"];

export const languageController = {
  change(req: Request, res: Response) {
    const lang = req.query.lang as string;

    if (!lang || !SUPPORTED_LANGS.includes(lang)) {
      return res.status(400).json({
        error: "Invalid language",
        supported: SUPPORTED_LANGS,
      });
    }

    res.cookie("lang", lang, {
      httpOnly: false,
      sameSite: "lax",
      path: "/",
    });

    return res.json({
      message: "Language changed successfully",
      lang,
    });
  },
};