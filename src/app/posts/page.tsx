import { getAllPosts } from "@/service/posts";

import FilterablePosts from "@/components/FilterablePosts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.categories).flat())];

  return <FilterablePosts posts={posts} categories={categories} />;
}
