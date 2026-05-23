"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            {/* Desktop: sticky left column with dot + title */}
            <div className="hidden md:flex sticky top-20 flex-col md:flex-row z-20 items-center self-start md:w-[400px]">
              <div className="h-6 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1.5" />
              </div>
              <h3 className="text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Mobile + Desktop content */}
            <div className="relative w-full pl-10 pr-4 md:pl-4">
              {/* Mobile: dot + title inline */}
              <div className="flex items-center gap-3 mb-4 md:hidden">
                <div className="absolute z-20 left-0 h-5 w-5 rounded-full bg-white dark:bg-black flex items-center justify-center shrink-0">
                  <div className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                </div>
                <h3 className="text-xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[9px] md:left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-blue-500 via-green-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};