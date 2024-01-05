import { PostList } from "@/components/post/PostList";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="mb-5 text-xl">Posts</h1>
      <div className="mb-5">
        <Suspense fallback={<div>loading...</div>}>
          <PostList />
        </Suspense>
      </div>
      <Link href="/new" className="bg-white w-[120px] p-1 text-black">
        新規作成
      </Link>
    </main>
  );
}
