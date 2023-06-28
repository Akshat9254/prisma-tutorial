import { faker } from "@faker-js/faker";
import { prisma } from "../src/config";
import { Comment } from "@prisma/client";

export const getRandomUser = () => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  return { name, email, password };
};

const getRandomPost = () => {
  const title = faker.lorem.words();
  const body = faker.lorem.paragraph();

  return { title, body };
};

const getRandomComment = () => {
  const text = faker.lorem.sentence();
  return { text };
};

const seed = async () => {
  await prisma.user.deleteMany();

  for (let i = 0; i < 4; i++) {
    const user = getRandomUser();
    const savedUser = await prisma.user.create({ data: user });

    for (let j = 0; j < faker.number.int({ min: 1, max: 5 }); j++) {
      const post = getRandomPost();
      const savedPost = await prisma.post.create({
        data: { ...post, userId: savedUser.id },
      });

      for (let k = 0; k < faker.number.int({ min: 2, max: 4 }); k++) {
        const comment = getRandomComment();
        const isChild = faker.datatype.boolean({ probability: 0.5 });

        let savedComment: Comment | null = null;

        if (isChild) {
          const count = await prisma.comment.count();
          const randomIndex = Math.floor(Math.random() * count);

          const parentComment = await prisma.comment.findFirst({
            skip: randomIndex,
          });

          if (parentComment) {
            savedComment = await prisma.comment.create({
              data: {
                ...comment,
                postId: savedPost.id,
                userId: savedUser.id,
                parentId: parentComment.id,
              },
            });
          } else {
            savedComment = await prisma.comment.create({
              data: {
                ...comment,
                postId: savedPost.id,
                userId: savedUser.id,
              },
            });
          }
        } else {
          savedComment = await prisma.comment.create({
            data: { ...comment, postId: savedPost.id, userId: savedUser.id },
          });
        }

        const isLiked = faker.datatype.boolean({ probability: 0.6 });

        if (isLiked) {
          await prisma.like.create({
            data: { userId: savedUser.id, commentId: savedComment.id },
          });
        }
      }
    }
  }
};

seed();
