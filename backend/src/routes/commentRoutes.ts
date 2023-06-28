import { Router } from "express";
import { CommentController } from "../controller";

const router = Router();
const commentController = new CommentController();

router.get(
  "/:postId",
  commentController.getRootCommentsByPostId.bind(commentController)
);

export default router;
