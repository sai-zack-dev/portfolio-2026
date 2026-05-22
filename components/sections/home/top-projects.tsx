"use client";
import Header from "@/components/common/Header";
import Carousel from "@/components/ui/carousel";

export default function TopProjects() {
  const slideData = [
    {
      title: "Myanmar Handwriting Recognition",
      description:
        "AI-powered deep learning system for recognizing and classifying handwritten Burmese characters with high accuracy.",
      src: "assets/mm-hw-recognition.png",
      link: "/projects/myanmar-handwriting-recognition",
    },
    {
      title: "Query Based Intelligence Visualization",
      description:
        "Interactive platform that transforms complex query data into meaningful visual insights via dynamic dashboards.",
      src: "assets/qbiv.png",
      link: "/projects/qbiv",
    },
    {
      title: "NEZT CLI",
      description:
        "A command-line tool for creating fully scaffolded Next.js and Nuxt.js projects with pre-built pages, themes, and optional dynamic features.",
      src: "assets/nezt.png",
      link: "/projects/nezt",
    },
    {
      title: "FlatSync",
      description:
        "A comprehensive flatmate and shared room management system designed to streamline communication, task management, and expense tracking.",
      src: "assets/flatsync.png",
      link: "/projects/flatsync",
    },
  ];

  return (
    <main className="flex min-h-screen w-full sm:items-start py-24 flex-col">
      <div className="w-full h-full p-5 max-w-4xl mx-auto">
        <Header
          title="Featured_Projects"
          description="Here are some of the projects I’ve built, combining creativity, functionality, and modern technologies across different domains."
          prefix="#"
        />
      </div>
      <div className="relative w-full h-full px-5">
        <Carousel slides={slideData} />
      </div>
    </main>
  );
}