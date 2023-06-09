import Link from "next/link";
import Image from "next/image";

import { Post } from "@/service/posts";

type Props = { post: Post };

export default function PostCard({
  post: { title, description, date, categories, path, unsplashThumbnail },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden rounded-md shadow-lg">
        <div className="relative h-40 overflow-hidden w-62">
          <Image
            src={unsplashThumbnail}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center p-2">
          <time className="self-end text-xs">{date.toString()}</time>
          <h3 className="w-full text-lg font-bold text-center truncate">
            {title}
          </h3>
          <p className="w-full text-center truncate">{description}</p>
          <div>
            {categories.map((category) => (
              <span
                key={category}
                className="px-2 mx-1 my-2 text-sm bg-green-200 rounded-lg"
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
