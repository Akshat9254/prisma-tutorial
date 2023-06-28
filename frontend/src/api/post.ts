import { AxiosResponse } from "axios";
import api from ".";
import { ApiResponse, PostDto } from "../types";

export const getAllPosts = async (): Promise<
  AxiosResponse<ApiResponse<PostDto[]>>
> => api.get("/post/all");
