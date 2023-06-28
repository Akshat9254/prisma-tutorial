import { CommentDto } from "./comment";
import { UserDto } from "./user";

export interface LikeDto {
  user: UserDto;
  userId: string;
  comment: CommentDto;
  commentId: string;
  createdAt: Date;
  updatedAt: Date;
}
