import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      {/* flex: 요소를 플렉스 컨테이너로 지정  👉 display: flex */}
      {/* justify-between: 요소 사이에 공간을 두고 정렬  👉 justify-content: space-between */}
      {/* items-center: 요소를 수직/수평 중앙으로 정렬  👉 align-items: center */}
      {/* p-4: 요소의 padding을 1rem으로 설정  👉 padding: 1rem (16px) */}
      <Link href="/">
        <h1 className="text-3xl font-bold">
          {/* text-3xl: 글자 크기를 1.875rem으로 설정  👉 font-size: 1.875rem (30px) */}
          {/* font-bold: 글꼴을 굵게 설정 👉 font-weight: bold */}
          Coovi's Blog
        </h1>
      </Link>
      <nav className="flex gap-4">
        {/* gap-4: flex items 사이의 간격을 1rem로 설정  👉 gap: 1rem (16px) */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
