import { BlogPost } from "../page";
import PageTitle from "../pagetitle";

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const posts: BlogPost[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )

  return posts.map((post) => ({
    id: String(post.id),
  }))
}

type PageProps = {
  params: { id: string }
}

export default async function PostsDetail({ params }: PageProps) {
  const { id } = await params
  const blogPost: BlogPost = await fetch(`https://api.vercel.app/blog/${id}`).then((res) =>
    res.json()
  )

  return (
    <div className="flex flex-col">
      <PageTitle title={`${blogPost.title}`} />
      <div className="p-10 pt-16 flex gap-5">
        <div className="flex gap-5">
          <div className="font-bold text-xs w-24">
            {blogPost.author}
          </div>
          <div className="w-8 h-0 border-1 border-[var(--divider)] mt-2" />
        </div>
        <div className="text-sm whitespace-pre-line">
          {blogPost.content}
        </div>
      </div>
    </div>
  );
}