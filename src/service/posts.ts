import path from "path";
import { readFile } from "fs/promises";
// import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  nextPost: Post | null;
  prevPost: Post | null;
};
// 🎯&: TS 타입 결합에 쓰이는 기호🎯
// Post 타입에 content 속성을 추가해서 새로운 타입 생성

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  // const data = await fs.readFile(filePath, "utf-8");
  // const posts = JSON.parse(data);
  // return posts.sort((a: Post, b: Post) => (a.date > b.date ? -1 : 1));
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  // const posts = await getAllPosts();
  // return posts.filter((post) => post.featured);
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find((post) => post.path === fileName);
  if (!currentPost) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을수 없습니다!`);
  }

  const currentIndex = allPosts.indexOf(currentPost);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const content = await readFile(filePath, "utf-8");

  return { ...currentPost, content, nextPost, prevPost };
}
