"use client";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="p-4 text-center">
      <h2 className="mb-2 text-lg font-bold border-b border-sky-500">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          // 🎯 * hover효과, * 현재 선택된 category에 따라 스타일변경 🎯
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
