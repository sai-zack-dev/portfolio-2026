import Header from "@/components/common/Header";
import ProjectList from "@/components/sections/projects/list";

export default function Projects() {
  return (
    <main className="flex flex-col w-full max-w-4xl items-center justify-center sm:items-start mx-auto mt-14 p-5">
      <Header
        title="Projects Page - Intro"
        description="This is the Projects page of the application."
      />
      <ProjectList />
    </main>
  );
}
