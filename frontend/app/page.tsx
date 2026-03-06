import Hero from "@/components/home/hero";
import FeaturedPosts from "@/components/home/featured-posts";


export default  function Home() {

  return (
    <main className=" flex flex-col bg-slate-100">
      <Hero />
      <FeaturedPosts/>
    </main>
  );
}
