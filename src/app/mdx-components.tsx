import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

// import Hero from "@/components/Hero";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const components = {
  // Hero,
  // h1: (props: any) => (
  //   <h1 {...props} className="text-red-600 large-text">
  //     {props.children}
  //   </h1>
  // ),
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={components} />;
}

// import Link from "next/link";
// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// import React from "react";
// import { MDXProviderComponentsProp } from "@mdx-js/react";

// interface LinkProps
//   extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
//   children?: React.ReactNode;
//   href: string | UrlObject;
// }

// interface ImgProps
//   extends Omit<
//     React.ImgHTMLAttributes<HTMLImageElement>,
//     "src" | "width" | "height" | "placeholder"
//   > {
//   src: string | StaticImageData;
//   width?: number | undefined;
//   height?: number | undefined;
//   placeholder?: "blur" | "empty" | undefined;
// }

// interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
//   children: React.ReactNode;
// }

// export const mdxComponents: MDXProviderComponentsProp = {
//   a: ({ children, ...props }: LinkProps) => <Link {...props}>{children}</Link>,

//   img: ({ src, alt, ...props }: ImgProps) => (
//     <Image src={src} alt={alt || ""} {...props} />
//   ),

//   pre: ({ children, ...props }: PreProps) => {
//     const codeString = (children as any).props.children;
//     const language = (children as any).props.className?.replace(
//       "language-",
//       ""
//     );
//     return (
//       <SyntaxHighlighter {...props} style={materialDark} language={language}>
//         {codeString}
//       </SyntaxHighlighter>
//     );
//   },
// };
