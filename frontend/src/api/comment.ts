import { AxiosResponse } from "axios";
import api from ".";
import { ApiResponse, CommentDto } from "../types";

export const getRootCommentsByPostId = (
  postId: string
): Promise<AxiosResponse<ApiResponse<CommentDto[]>>> =>
  api.get(`/comment/${postId}`);
