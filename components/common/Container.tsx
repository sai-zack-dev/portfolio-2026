import React from "react";

export default function SharedSection({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-3xl">
        {children}
    </div>
  );
}
