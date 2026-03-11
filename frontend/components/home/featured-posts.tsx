import { getFeaturedPosts } from "@/data";
import {  Posts } from "@/types/posts";
import Image from "next/image";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getFeaturedPosts();
  if (!data) notFound();
  return data;
}

export default async function FeaturedPosts() {
  const posts :Posts = await loader();
  return (
    <section>
      {posts.data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content[0].children[0].text}</p>
          <p>{post.author.name}</p>
          <Image
            src={post.thumbnail.formats.thumbnail.url}
            width={post.thumbnail.formats.thumbnail.width}
            height={post.thumbnail.formats.thumbnail.height}
            alt={post.title}
          />
        </div>
      ))}
    </section>
  );
}
