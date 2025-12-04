import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";

import { getEnv } from "./utils/getEnv";

import authRoutes from "./resources/auth/auth.routes";
import userRoutes from "./resources/user/user.routes";
import productRoutes from "./resources/product/product.routes";
import purchaseRoutes from "./resources/purchase/purchase.routes";
import languageRoutes from "./resources/language/language.routes";

import { setLangCookie } from "./resources/language/language.middleware";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const env = getEnv();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(setLangCookie);

// Sessão
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Rotas
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/lang", languageRoutes);

// Healthcheck
app.get("/ping", (req, res) => {
  res.json({ ok: true });
});

// Erros
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});