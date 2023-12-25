"use client";

import { PostForm } from "@/components/post/PostForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-5">
      <Link href="/" className="mb-5 block">
        ←戻る
      </Link>
      <h1 className="mb-5 text-xl">新規作成</h1>
      <PostForm />
    </div>
  );
}
