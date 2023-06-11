import Chat from "@/components/Chat";
import Link from "next/link";

export default function Main() {
  return (
    <div className="w-full flex items-center justify-center gap-6 h-[100svh] bg-secondary">
      <Link
        href="/scenario1"
        className="bg-primary border-2 py-2 px-4 border-highlight rounded-md text-contrast hover:bg-highlight hover:text-primary"
      >
        Demo scenario 1
      </Link>
      <Link
        href="/scenario2"
        className="bg-primary border-2 py-2 px-4 border-highlight rounded-md text-contrast hover:bg-highlight hover:text-primary"
      >
        Demo scenario 2
      </Link>
    </div>
  );
}
