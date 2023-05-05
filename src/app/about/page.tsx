import Hero from "@/components/Hero";

const TITLE_CLASS = "font-bold text-2xl text-gray-800 my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="text-center bg-gray-100 p-8 m-8 shadow-lg">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>만드는것을 좋아하고 개발을 사랑하는 프론트 엔드 개발자</p>
        <h2 className={TITLE_CLASS}>Stack</h2>
        <p>React, TS</p>
      </section>
    </>
  );
}
