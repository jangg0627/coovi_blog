type Props = {
  children: React.ReactNode;
  isPage?: boolean;
};

const OVERLAY_CLASS =
  "absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center";

export default function Development({ children, isPage = false }: Props) {
  return (
    <div className={isPage ? "h-screen relative" : "relative"}>
      {children}
      {isPage && (
        <div className={OVERLAY_CLASS}>
          <div className="flex justify-center items-center bg-opacity-80 bg-gray-700 w-[70%] h-[70%] rounded-2xl">
            <p className="text-white text-5xl">🚧 개발중인 페이지입니다! 🚧</p>
          </div>
        </div>
      )}
      {!isPage && (
        <div className={OVERLAY_CLASS}>
          <div className="flex justify-center items-center bg-opacity-50 bg-gray-700 w-[70%] h-[70%] rounded-2xl">
            <p className="text-white text-2xl">
              🚧 개발중인 컴포넌트입니다! 🚧
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
