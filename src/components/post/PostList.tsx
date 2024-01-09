import { getPosts } from "@/lib/data";
import Link from "next/link";

export async function PostList() {
  const posts = await getPosts();

  return (
    <div className="flex-col flex">
      {posts?.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} className="underline">
          {post.title}
        </Link>
      ))}
    </div>
  );
}
