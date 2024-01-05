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
