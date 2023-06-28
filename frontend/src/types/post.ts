// import { CommentDto } from "./comment";
import { UserDto } from "./user";

export interface PostDto {
  id: string;
  title: string;
  body: string;
  user: {
    name: string;
  };
  userId: string;
  _count: {
    comments: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
