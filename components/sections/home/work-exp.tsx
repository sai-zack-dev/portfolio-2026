import Header from "@/components/common/Header";
import { Timeline9 } from "@/components/ui/timeline9";
import { experiences } from "@/data/experience";

export default function WorkExp() {
  return (
    <main className="flex min-h-screen w-full sm:items-start py-24 flex-col">
      <div className="w-full h-full p-5 max-w-4xl mx-auto">
        <Header
          title="Work_Experience"
          description="I've been working across design and software development for the past few years. Here's a timeline of my journey."
          prefix="#"
        />

        <Timeline9 items={experiences} />
      </div>
    </main>
  );
}
