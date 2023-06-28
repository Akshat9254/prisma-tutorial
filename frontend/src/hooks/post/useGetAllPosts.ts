import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ApiResponse, PostDto } from "../../types";
import { getAllPosts as getAllPostsFn } from "../../api/post";

const useGetAllPosts = () => {
  return useQuery<AxiosResponse<ApiResponse<PostDto[]>>, AxiosError>(
    "posts-all",
    getAllPostsFn
  );
};
export default useGetAllPosts;
