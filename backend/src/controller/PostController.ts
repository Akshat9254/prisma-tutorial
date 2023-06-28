import { Request, Response } from "express";
import { PostService } from "../service";
import HttpStatus from "http-status-codes";
import { ApiResponse } from "../types";
import { PostDto } from "../types/post";

class PostController {
  private postService: PostService;
  constructor() {
    this.postService = new PostService();
  }

  async getAllPosts(req: Request, res: Response) {
    const posts = await this.postService.getAllPosts();
    const response: ApiResponse<PostDto[]> = {
      status: "success",
      data: posts,
    };
    res.status(HttpStatus.OK).json(response);
  }
}

export default PostController;
