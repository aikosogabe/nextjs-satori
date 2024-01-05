import prisma from "@/lib/prisma/script";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  const baseUrl = "https://nextjs-satori.vercel.app";
  return {
    title: post?.title,
    description: post?.content,
    openGraph: {
      images: `${baseUrl}/posts/og?title=${post?.title}`,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <div className="p-5">
      <Link href="/" className="mb-5 block">
        ←戻る
      </Link>
      <h1 className="mb-5 text-xl">Post{params.id}</h1>

      <div className="mb-5">
        <h2>title: {post?.title}</h2>
        <p>{post?.content}</p>
      </div>

      <Link className="underline" href={`/posts/${params.id}/edit`}>
        edit
      </Link>
    </div>
  );
}
