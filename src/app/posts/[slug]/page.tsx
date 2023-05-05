import Image from "next/image";

import { getPostData } from "@/service/posts";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, nextPost, prevPost } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/6 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={`${title} image`}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prevPost && <AdjacentPostCard post={prevPost} type={"prev"} />}
        {nextPost && <AdjacentPostCard post={nextPost} type={"next"} />}
      </section>
    </article>
  );
}
