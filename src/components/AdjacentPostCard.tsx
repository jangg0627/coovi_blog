import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Post } from "@/service/posts";

type Props = {
  post: Post;
  type: "prev" | "next";
};

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={`${title} 이미지`}
        width={150}
        height={100}
      />
      <div>
        {type === "prev" && <FaArrowLeft />}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {type === "next" && <FaArrowRight />}
      </div>
    </Link>
  );
}
