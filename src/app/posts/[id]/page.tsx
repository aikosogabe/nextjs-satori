import prisma from "@/lib/prisma/script";
import { Metadata } from "next";
import Link from "next/link";
import { ImageResponse } from "next/og";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  const image = new ImageResponse(<p>{post?.title}</p>, {
    width: 1200,
    height: 630,
  });

  const metadata: Metadata = {
    title: post?.title,
    description: post?.content,
    openGraph: {
      images: image,
    },
  };

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
