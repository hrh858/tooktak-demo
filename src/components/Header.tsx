export default function Header() {
  return (
    <div className="px-2 md:px-8 py-1 md:py-2 flex flex-row items-center justify-between h-12 w-full bg-highlight">
      <img
        className="h-6 md:h-8"
        src="https://www.yuhan-kimberly.co.kr/images/renewal2022/header/logo_w.png"
      />
      <span className="text-sm font-bold bg-white rounded-md px-2 py-1 flex flex-row gap-2 items-center">
        뚝딱이
        <div className="rounded-full h-2 w-2 bg-green-400" />
      </span>
    </div>
  );
}
