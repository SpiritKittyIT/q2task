import Image from "next/image";
import { BlogPost } from "./page";
import Link from "next/link";

export default function Post({ id, title, author, content }: BlogPost) {
  return (
    <Link href={`/posts/${id}`} className="flex flex-col rounded-md hover:shadow-2xl active:shadow-black">
      <Image
        src="/placeholder.png"
        alt="Placeholder"
        width={620}
        height={560}
        className="w-full h-auto rounded-md"
      />
      <div className="flex flex-col p-2">
        <div className="line-clamp-1 overflow-ellipsis text-[var(--text-secondary)] text-xs h-4 my-3">
          {author}
        </div>
        <div className="line-clamp-2 overflow-ellipsis text-2xl h-16 mb-5">
          {title}
        </div>
        <div className="line-clamp-3 overflow-ellipsis text-[var(--text-secondary)] text-xs h-12 whitespace-pre-line">
          {content}
        </div>
      </div>
    </Link>
  );
}
