import prisma from "@/lib/prisma/script";
import Link from "next/link";

export default async function Home() {
  const items = await prisma.post.findMany();
  return (
    <main className="p-5">
      <h1 className="mb-5 text-xl">Posts</h1>
      <div className="flex-col flex mb-5">
        {items.map((item) => (
          <Link href={`/posts/${item.id}`} key={item.id} className="underline">
            {item.title}
          </Link>
        ))}
      </div>
      <Link href="/new" className="bg-white w-[120px] p-1 text-black">
        新規作成
      </Link>
    </main>
  );
}
