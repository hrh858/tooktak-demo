import { ReactNode } from "react";

export default function Chat({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen flex h-[100svh] flex-col bg-primary text-contrast">
      {children}
    </div>
  );
}
