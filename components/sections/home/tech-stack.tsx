"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import Header from "@/components/common/Header";

import {
  techStackTree,
  techStackLanguages,
  techStackTools,
} from "@/data/techstack";

export default function TechStack() {
  return (
    <main className="flex min-h-screen w-full max-w-4xl items-center justify-center sm:items-start mx-auto py-24">
      <div className="w-full h-full p-5">
        <Header
          title="Tech_Stack"
          description="A collection of technologies, tools, and frameworks I use to design, build, and deliver modern digital experiences."
          prefix="#"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 py-5">
          {/* File Tree */}
          <div className="bg-violet-100 rounded-2xl md:row-span-2 relative overflow-hidden">
            <Tree
              className="overflow-hidden bg-background p-2 z-0 w-full rounded-xl border"
              initialSelectedId={techStackTree.initialSelectedId}
              initialExpandedItems={techStackTree.initialExpandedItems}
            >
              <InteractiveGridPattern
                className={cn(
                  "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
              />

              <Folder element="Frameworks" value="1">
                <Folder element="backend-api" value="2">
                  {techStackTree.frameworks.backend.map((item) => (
                    <File
                      key={item.id}
                      value={item.id}
                      fileIcon={<item.icon />}
                    >
                      <p>{item.name}</p>
                    </File>
                  ))}
                </Folder>

                <Folder element="web-frontend" value="5">
                  {techStackTree.frameworks.frontend.map((item) => (
                    <File
                      key={item.id}
                      value={item.id}
                      fileIcon={<item.icon />}
                    >
                      <p>{item.name}</p>
                    </File>
                  ))}
                </Folder>

                <Folder element="cross-platform" value="9">
                  <Folder element="mobile" value="10">
                    {techStackTree.frameworks.mobile.map((item) => (
                      <File
                        key={item.id}
                        value={item.id}
                        fileIcon={<item.icon />}
                      >
                        <p>{item.name}</p>
                      </File>
                    ))}
                  </Folder>

                  <Folder element="desktop" value="12">
                    {techStackTree.frameworks.desktop.map((item) => (
                      <File
                        key={item.id}
                        value={item.id}
                        fileIcon={<item.icon />}
                      >
                        <p>{item.name}</p>
                      </File>
                    ))}
                  </Folder>
                </Folder>
              </Folder>
            </Tree>
          </div>

          {/* Terminal */}
          <div className="bg-amber-100 rounded-2xl">
            <Terminal>
              <TypingAnimation>$ Languages</TypingAnimation>
              {techStackLanguages.map((line, index) => (
                <AnimatedSpan
                  key={index}
                  className="text-green-500 text-wrap text-sm whitespace-pre-wrap"
                >
                  {line}
                </AnimatedSpan>
              ))}
            </Terminal>
          </div>

          {/* Tools */}
          <div className="grid grid-cols-2 gap-3 rounded-2xl">
            {techStackTools.map((tool) => (
              <div
                key={tool.name}
                className="w-full rounded-md border flex items-center gap-3 px-3 py-3"
              >
                <tool.icon
                  className={cn("w-6 h-6", tool.className)}
                />
                <div>{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
