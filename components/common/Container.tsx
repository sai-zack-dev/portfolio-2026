import React from "react";

export default function SharedSection({children}: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen w-full max-w-7xl bg-white dark:bg-black mx-auto py-24 h-screen items-center justify-center flex-col">
        {children}
    </div>
  );
}
