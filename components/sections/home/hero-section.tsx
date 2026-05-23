import { MorphingText } from "@/components/ui/morphing-text";
import { heroTitles } from "@/data/titles";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full dark:mask-b-from-50% dark:mask-t-from-50% dark:mask-radial-from-50% mask-b-from-10% mask-t-from-10% mask-radial-from-90%"
        squareSize={5}
        gridGap={10}
        // color="#6B7280"
        color="#00C660"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <div className="text-xs sm:text-sm md:text-base flex min-h-screen max-w-4xl mx-auto py-24 flex-col w-full h-full justify-center items-start md:items-center p-5 gap-3 z-1">
        <p className="text-gray-700 dark:text-gray-300">
          {heroTitles.greeting}
        </p>
        <h1 className="text-4xl sm:text-7xl font-semibold">
          {heroTitles.name}
        </h1>

        <div className="flex gap-1 text-xl sm:text-3xl md:mr-45 font-semibold text-gray-800 dark:text-gray-200">
          <h1>{heroTitles.rolePrefix}</h1>
          <MorphingText texts={heroTitles.roles} />
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4 md:text-center">
          {heroTitles.description}
        </p>
        <div className="flex gap-3">
          <Button
            asChild
            className="cursor-pointer text-xs md:text-base h-full"
          >
            <a
              href="https://github.com/sai-zack-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <SiGithub />
              Github 
              <span className="ml-1 hidden sm:inline">Profile</span>
            </a>
          </Button>
          <Link href={"/projects"}>
            <InteractiveHoverButton className="cursor-pointer text-xs md:text-base">
              <span className="ml-1 hidden sm:inline">View</span>
              Projects
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
