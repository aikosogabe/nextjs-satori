import { postSchema } from "@/lib/post/postSchema";
import prisma from "@/lib/prisma/script";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const json = await req.json();
  const parsed = postSchema.safeParse(json);

  if (!parsed.success) {
    return new Response(JSON.stringify(parsed.error), { status: 400 });
  }

  try {
    await prisma.post.update({
      where: {
        id: parsed.data.id,
      },
      data: {
        title: parsed.data.title,
        content: parsed.data.content,
      },
    });
    return new Response(null, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
