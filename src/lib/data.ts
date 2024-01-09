import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/lib/prisma/script";

export async function getPosts() {
  noStore();
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export async function getPostById(id: string) {
  noStore();
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
