import prisma from "@/lib/prisma/script";

export async function getPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    return post;
  } catch (error) {
    console.error(error);
  }
}
