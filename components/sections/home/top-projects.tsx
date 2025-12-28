"use client";
import Header from "@/components/common/Header";
import Carousel from "@/components/ui/carousel";

export default function TopProjects() {
  const slideData = [
    {
      title: "Mystic Mountains",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto ad repellendus", 
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects"
    },
    {
      title: "Urban Dreams",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto ad repellendus",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects"
    },
    {
      title: "Neon Nights",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto ad repellendus",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects"
    },
    {
      title: "More Projects",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto ad repellendus",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/projects"
    },
  ];
  return (
    <main className="flex min-h-screen w-full sm:items-start py-24 flex-col">
      <div className="w-full h-full p-5 max-w-4xl mx-auto">
         <Header title="Featured_Projects" description="I&apos;ve been working on --- for the past 2 years. Here&apos;s a timeline of my journey." prefix="#" />
      </div>
      <div className="relative w-full h-full px-5">
        <Carousel slides={slideData} />
      </div>
    </main>
  );
}
