import fs from "fs";
import path from "path";

import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";

// export type Post = {
//   title: string;
//   description: string;
//   date: string;
//   categories: string[];
//   path: string;
//   unsplashThumbnail: string;
//   featured: boolean;
//   content: string;
// };

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  categories: string[];
  path: string;
  unsplashThumbnail: string;
  featured: boolean;
};

export type Post = Frontmatter & {
  content: MDXRemoteSerializeResult;
};

export type PostData = Post & {
  nextPost: Post | null;
  prevPost: Post | null;
};

const postsDirectory = path.join(process.cwd(), "data", "posts");

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.promises.readdir(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = await fs.promises.readFile(fullPath, "utf8");

      // const { data, content } = matter(fileContents);

      const serialized = await serialize(fileContent, {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      });

      const frontmatter = serialized.frontmatter as Frontmatter;

      return {
        ...frontmatter,
        content: serialized,
      };
    })
  );
  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => !post.featured);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find((post) => post.path === fileName);
  if (!currentPost) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을수 없습니다!`);
  }

  const currentIndex = allPosts.indexOf(currentPost);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return { ...currentPost, nextPost, prevPost };
}
