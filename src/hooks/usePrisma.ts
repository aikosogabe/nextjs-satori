import prisma from "@/lib/prisma/script";

export function usePrisma() {
  const posts = prisma.post.findMany();
  return { posts };
}
