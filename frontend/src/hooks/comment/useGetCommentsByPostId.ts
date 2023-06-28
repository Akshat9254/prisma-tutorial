import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { ApiResponse, CommentDto } from "../../types";
import { getRootCommentsByPostId } from "../../api/comment";

const useGetCommentsByPostId = (postId: string) => {
  return useQuery<AxiosResponse<ApiResponse<CommentDto[]>>, AxiosError>(
    ["comment", postId, null],
    () => getRootCommentsByPostId(postId),
    {
      staleTime: 300000,
      enabled: false,
    }
  );
};
export default useGetCommentsByPostId;
