import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ArrowLeft, SkipBack } from "react-feather";

export default function Header() {
  const router = useRouter();

  return (
    <div className="px-2 md:px-8 py-1 md:py-2 flex flex-row items-center justify-between h-12 w-full bg-highlight">
      <motion.button
        className="rounded-md w-8 h-8 flex items-center justify-center"
        initial={{
          backgroundColor: "rgba(255,255,255,0)",
          color: "rgba(255,255,255,1)",
        }}
        whileHover={{
          backgroundColor: "rgba(255,255,255,1)",
          color: "rgb(221,20,45)",
        }}
        onClick={() => router.push("/")}
      >
        <ArrowLeft />
      </motion.button>
      <img
        className="h-6 md:h-8 mr-auto ml-4"
        src="https://www.yuhan-kimberly.co.kr/images/renewal2022/header/logo_w.png"
      />
      <span className="text-sm font-bold bg-white rounded-md px-2 py-1 flex flex-row gap-2 items-center">
        뚝딱이
        <div className="rounded-full h-2 w-2 bg-green-400" />
      </span>
    </div>
  );
}
