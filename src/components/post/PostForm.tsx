"use client";

import { Post } from "@/type/post";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPost, updatePost } from "@/lib/actions";

type Props = {
  id?: number;
  defaultValues?: Post;
};

export function PostForm({ id, defaultValues }: Props) {
  const router = useRouter();
  const update = id ? true : false;
  const [title, setTitle] = useState(defaultValues?.title ?? "");
  const [content, setContent] = useState(defaultValues?.content ?? "");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (update && id) {
      updatePost({ id, title, content });
    } else {
      createPost({ title, content });
    }
  }

  return (
    <form className="flex flex-col gap-2 text-black" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="タイトル"
        className="p-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        placeholder="本文"
        className="p-1"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="submit"
        value={update ? "更新" : "作成"}
        className="bg-white w-[120px] p-1"
      />
    </form>
  );
}
