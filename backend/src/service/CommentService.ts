import { prisma } from "../config";

class CommentService {
  async getCommentsByPostId(postId: string, parentId: string | null) {
    console.log(`get comment request with postId ${postId}`)
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
