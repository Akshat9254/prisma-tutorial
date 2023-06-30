import express from "express";
import cors from "cors";
import { env } from "./config";
import { authRouter, commentRouter, paymentRouter, postRouter } from "./routes";
import { errorHandlerMiddleware } from "./middleware";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/payment", paymentRouter);

app.use(errorHandlerMiddleware);

app.listen(env.APP_PORT, () =>
  console.log(`server listening on ${env.APP_PORT}`)
);
