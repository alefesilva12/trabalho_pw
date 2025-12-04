import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { AppError } from "../errors/AppError";

export const validate =
  (schema: ObjectSchema) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const messages = error.details.map((d) => d.message);
      throw new AppError(messages.join(", "), 400);
    }

    next();
  };
