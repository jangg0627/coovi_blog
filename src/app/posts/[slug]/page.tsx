import Image from "next/image";

import { getPostData } from "@/service/posts";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, unsplashThumbnail, nextPost, prevPost } = post;

  return (
    <article className="flex flex-col items-center m-4 overflow-hidden bg-gray-100 shadow-lg rounded-2xl">
      <div className="w-full max-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          className="object-cover w-full"
          src={unsplashThumbnail}
          alt={`${title} thumbnail image`}
          width={760}
          height={420}
        />
      </div>
      <PostContent post={post} />
      <section className="w-[85%] h-48 flex shadow-md rounded-lg overflow-hidden">
        {prevPost && <AdjacentPostCard post={prevPost} type={"prev"} />}
        {nextPost && <AdjacentPostCard post={nextPost} type={"next"} />}
      </section>
    </article>
  );
}
