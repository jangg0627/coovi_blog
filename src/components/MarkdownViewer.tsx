"use client";

import { type MDXRemoteSerializeResult } from "next-mdx-remote";

import { MdxContent } from "@/app/mdx-components";

export default function MarkdownViewer({
  content,
}: {
  content: MDXRemoteSerializeResult;
}) {
  return (
    <div className="prose max-w-none">
      <MdxContent source={content} />
    </div>
  );
}
