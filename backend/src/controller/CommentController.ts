import { CommentService } from "../service";
import { NextFunction, Request, Response } from "express";
import { ApiResponse, CommentDto } from "../types";
import HttpStatus from "http-status-codes";

class CommentController {
  private commentService: CommentService;
  constructor() {
    this.commentService = new CommentService();
  }

  async getRootCommentsByPostId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { postId } = req.params;
      const rootComments = await this.commentService.getCommentsByPostId(
        postId,
        null
      );
      const response: ApiResponse<CommentDto[]> = {
        status: "success",
        data: rootComments,
      };
      res.status(HttpStatus.OK).json(response);
    } catch (err) {
      next(err);
    }
  }
}

export default CommentController;
