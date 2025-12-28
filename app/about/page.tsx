import Header from "@/components/common/Header";
import Hobbies from "@/components/sections/about/hobbies";
import Journey from "@/components/sections/about/journey";

export default function About() {
  return (
    <main className="flex flex-col w-full max-w-4xl items-center justify-center sm:items-start mx-auto mt-14 p-5">
      <Header
        title="Walk Through My Tech Journey"
        description="Learn more about my education, experience, and experties in the tech industry by timeline. My journey from beginner to professional"
      />
      <Journey />
      <Hobbies />
    </main>
  );
}
