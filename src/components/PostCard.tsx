import Link from "next/link";
import Image from "next/image";

import { Post } from "@/service/posts";

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, categories, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <div>
            {categories.map((category) => (
              <span
                key={category}
                className="text-sm rounded-lg bg-green-200 px-2 my-2 mx-1"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
