type Props = {
  params: { slug: string };
};

import { getPostData } from "@/service/posts";

export default async function Page({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
