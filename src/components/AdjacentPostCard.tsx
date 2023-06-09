// 포스트 아래쪽 다음-이전을 보여주는 컴포넌트

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Post } from "@/service/posts";

type Props = {
  post: Post;
  type: "prev" | "next";
};

const ICON_CLASS =
  "text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl";

export default function AdjacentPostCard({
  post: { path, title, description, unsplashThumbnail },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full h-full bg-black">
      <Image
        className="object-cover w-full h-full opacity-40"
        src={unsplashThumbnail}
        alt={`${title} 이미지`}
        width={150}
        height={100}
      />
      <div className="absolute flex items-center justify-around w-full px-8 text-white -translate-x-1/2 -translate-y-1/2 group top-1/2 left-1/2">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
