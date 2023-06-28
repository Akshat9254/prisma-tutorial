import { prisma } from "../config";

class PostService {
  async getAllPosts() {
    return await prisma.post.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            comments: {
              where: {
                parentId: null,
              },
            },
          },
        },
      },
      take: 5,
    });
  }
}

export default PostService;
