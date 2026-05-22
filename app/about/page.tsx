import Header from "@/components/common/Header";
import Hobbies from "@/components/sections/about/hobbies";
import Journey from "@/components/sections/about/journey";
import { aboutTitles } from "@/data/titles";


export default function About() {
  return (
    <main className="flex flex-col w-full max-w-4xl items-center justify-center sm:items-start mx-auto mt-14 p-5">
      <Header
        title={aboutTitles.title}
        description={aboutTitles.description}
      />
      <Journey />
      <Hobbies />
    </main>
  );
}
