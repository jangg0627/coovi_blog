import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/coovi.jpeg";

export default function Hero() {
  return (
    <section className="text-center">
      <div className="mx-auto w-64 h-64 rounded-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={profileImage}
          alt="Profile image"
          priority
        />
      </div>
      <h2 className="text-3xl font-bold mt-2">Hi, I'm Coovi</h2>
      <h3 className="text-xl font-semibold">프론트엔드 엔지니어</h3>
      <p>성장하는 개발자 쿠비입니다.</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me!
        </button>
      </Link>
    </section>
  );
}
