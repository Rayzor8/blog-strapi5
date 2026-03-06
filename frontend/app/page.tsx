import Hero from "@/components/hero";
import { getPosts } from "@/data";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getPosts();
  if (!data) notFound();
  return data;
}

export default async function Home() {
  const posts = await loader();

  return (
    <main className=" flex flex-col bg-slate-100">
      <Hero />
      {
        posts.data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content[0].children[0].text}</p>
          </div>
        ))
      }
    </main>
  );
}
