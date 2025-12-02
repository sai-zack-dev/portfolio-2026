import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-centerbg-white dark:bg-black sm:items-start">
      {/* Page Content */}
      <div className="flex min-h-screen w-full max-w-7xl items-center justify-center bg-white dark:bg-black sm:items-start mx-auto py-24 h-screen">
        <div className="w-full h-full bg-red-100 justify-center flex flex-col items-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            About Page
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the About page of the application.
          </p>
        </div>
        <div className="w-full h-full bg-blue-100"></div>
      </div>
    </main>
  );
}
