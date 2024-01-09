import { PostForm } from "@/components/post/PostForm";
import { getPost } from "@/lib/post/getPost";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div className="p-5">
      <Link href={`/posts/${params.id}`} className="mb-5 block">
        ←戻る
      </Link>
      <h1 className="mb-5 text-xl">Post{params.id}を編集</h1>
      <PostForm
        id={Number(params.id)}
        defaultValues={{
          title: post?.title ?? "",
          content: post?.content ?? "",
        }}
      />
    </div>
  );
}
