import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ApiResponse, PostDto } from "../types";
import { getAllPosts as getAllPostsFn } from "../api/post";

const usePost = () => {
  const getAllPosts = useQuery<
    AxiosResponse<ApiResponse<PostDto[]>>,
    AxiosError
  >("posts-all", getAllPostsFn);

  return { getAllPosts };
};
export default usePost;
