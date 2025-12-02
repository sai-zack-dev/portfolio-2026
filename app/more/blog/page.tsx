export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-centerbg-white dark:bg-black sm:items-start">
      {/* Page Content */}
      <div className="flex min-h-screen w-full max-w-7xl bg-white dark:bg-black mx-auto py-24 h-screen items-center justify-center flex-col">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Blog Page
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is the Blog page of the application.
          </p>
      </div>
    </main>
  );
}
