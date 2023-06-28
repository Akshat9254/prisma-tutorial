import { cleanEnv, port } from "envalid";
import dotenv from "dotenv";
dotenv.config();

export const env = cleanEnv(process.env, {
  APP_PORT: port(),
});
