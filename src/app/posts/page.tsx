import PageTitle from "./pagetitle";
import Post from "./post";

export const revalidate = 60;

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  content: string;
}

export default async function Posts() {
  const blogPosts: BlogPost[] = await fetch(
    'https://api.vercel.app/blog',
    { next: { revalidate: 60 } }
  ).then((res) =>
    res.json()
  )

  return (
    <div className="flex flex-col">
      <PageTitle title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <div className="p-10 flex flex-col gap-10">
        <div className="text-4xl font-bold">
          Nejnovější
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
          {
            blogPosts.map((blogPost) =>
              <Post key={blogPost.id} id={blogPost.id} title={blogPost.title} author={blogPost.author} content={blogPost.content} />
            )
          }
        </div>
      </div>
    </div>
  );
}
