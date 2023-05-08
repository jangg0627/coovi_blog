import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  title: string;
  description: string;
  date: string;
  categories: string[];
  path: string;
  unsplashThumbnail: string;
  featured: boolean;
  content: string;
};

export type PostData = Post & {
  nextPost: Post | null;
  prevPost: Post | null;
};

const postsDirectory = path.join(process.cwd(), "data", "posts");

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterOptions = {
      engines: {
        yaml: (s: string) =>
          require("js-yaml").load(s, {
            schema: require("js-yaml").JSON_SCHEMA,
          }),
      },
    };

    const { data, content } = matter(fileContents, matterOptions);

    return {
      ...data,
      content,
    } as Post;
  });

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
