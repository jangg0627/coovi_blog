import Image from "next/image";

import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article>
      <Image
        src={`/images/posts/${path}.png`}
        alt={`${title} image`}
        width={760}
        height={420}
      />
      <section>
        <p>{date.toString()}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <MarkdownViewer content={content} />;
      </section>
    </article>
  );
}
