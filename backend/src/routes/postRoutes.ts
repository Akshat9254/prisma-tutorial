import { Router } from "express";
import { PostController } from "../controller";

const router = Router();

const postContoller = new PostController();

router.get("/all", postContoller.getAllPosts.bind(postContoller));

export default router;
