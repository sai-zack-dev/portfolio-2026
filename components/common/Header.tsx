export default function Header({title, description, prefix}: {title: string; description: string; prefix?: string}) {
  return (
    <div className="py-5">
      <h2 className="text-lg md:text-3xl mb-4 text-black dark:text-white max-w-4xl">
        {prefix}{title}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl">
        {description}
      </p>
    </div>  
  );
}
