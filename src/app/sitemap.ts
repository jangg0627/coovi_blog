import { MetadataRoute } from "next";

import { getAllPosts } from "@/service/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://coovi-blog.vercel.app/";

  const allPostsData = await getAllPosts();
  const postsSitemap = allPostsData.map((post) => {
    return {
      url: `https://coovi-blog.vercel.app/posts/${post.path}`,
      lastModified: new Date(post.date),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}posts`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}contact`,
      lastModified: new Date(),
    },
    ...postsSitemap,
  ];
}
