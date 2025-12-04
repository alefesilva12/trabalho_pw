import { cleanEnv, str, port } from "envalid";

export function getEnv() {
  return cleanEnv(process.env, {
    DATABASE_URL: str(),
    SESSION_SECRET: str(),
    PORT: port({ default: 3001 }),
  });
}
