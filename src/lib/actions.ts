"use server";

import { Post } from "@/type/post";
import prisma from "./prisma/script";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost({ title, content }: Post) {
  try {
    await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/");
  redirect("/");
}

export async function updatePost({ id, title, content }: Post) {
  try {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
      },
    });
  } catch (error) {
    console.error(error);
  }
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}
