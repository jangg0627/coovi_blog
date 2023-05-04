import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="font-bold text-2xl my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
