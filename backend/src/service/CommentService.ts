import { prisma } from "../config";

class CommentService {
  async getCommentsByPostId(postId: string, parentId: string | null) {
    return prisma.comment.findMany({
      where: {
        postId,
        parentId,
      },
      include: {
        _count: {
          select: {
            likes: true,
            children: true,
          },
        },
      },
    });
  }
}

export default CommentService;
