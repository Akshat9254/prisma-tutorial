export interface CommentDto {
  id: string;
  text: string;
  postId: string;
  userId: string;
  parentId: string | null;
  _count: {
    likes: number;
    children: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
