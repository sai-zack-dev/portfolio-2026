import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { ExperienceItem } from "@/data/experience";

interface Timeline9Props {
  items: ExperienceItem[];
  className?: string;
}

const Timeline9 = ({ items, className }: Timeline9Props) => {
  return (
    <section className={cn("bg-background py-10", className)}>
      <div className="container">
        <div className="relative mx-auto max-w-4xl">
          <Separator
            orientation="vertical"
            className="absolute top-4 left-2 bg-muted"
          />

          {items.map((entry, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="absolute top-3.5 left-0 size-4 rounded-full bg-foreground" />

              {/* Title */}
              <h4 className="text-xl font-bold tracking-tight">
                {entry.title}
              </h4>

              {/* Company & Location */}
              <div className="text-sm text-muted-foreground mt-1">
                {entry.company} · {entry.location}
              </div>

              {/* Date */}
              <h5 className="text-sm mt-1 text-muted-foreground xl:absolute xl:-left-44 xl:top-1 w-40 flex xl:justify-end">
                {entry.date}
              </h5>

              <Card className="my-4 border-none shadow-none">
                <CardContent>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {entry.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline9 };
