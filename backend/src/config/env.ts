import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv";
dotenv.config();

export const env = cleanEnv(process.env, {
  APP_PORT: port(),
  RAZORPAY_KEY_ID: str(),
  RAZORPAY_KEY_SECRET: str(),
});
