import { MorphingText } from "@/components/ui/morphing-text";
import { heroTitles } from "@/data/titles";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
export default function HeroSection() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full mask-b-from-50% mask-t-from-50% mask-radial-[50%_90%] mask-radial-from-80%"
        squareSize={5}
        gridGap={10}
        color="#00C660"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <div className="text-xs sm:text-sm md:text-base flex min-h-screen max-w-4xl mx-auto py-24 flex-col w-full h-full justify-center items-start p-5 gap-3">
          <p className="text-gray-700 dark:text-gray-300">
            {heroTitles.greeting}
          </p>
          <h1 className="text-4xl sm:text-7xl font-semibold">{heroTitles.name}</h1>

          <div className="flex gap-1 text-xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            <h1>{heroTitles.rolePrefix}</h1>
            <MorphingText texts={heroTitles.roles} />
          </div>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-4">
            {heroTitles.description}
          </p>
      </div>
    </main>
  );
}
