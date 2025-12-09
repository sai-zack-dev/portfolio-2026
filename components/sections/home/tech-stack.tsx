"use client";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import {
  SiPhp,
  SiNestjs,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNuxtdotjs,
  SiFlutter,
  SiElectron,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import Header from "@/components/common/Header";

export default function TechStack() {
  return (
    <main className="flex min-h-screen w-full max-w-4xl items-center justify-center sm:items-start mx-auto py-24">
      <div className="w-full h-full p-5">
        <Header title="Tech Stack" description="I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline of my journey." />
        <div className="grid md:grid-cols-2  w-full gap-5 py-5">
          <div className="bg-violet-100 rounded-2xl row-span-2">
            <Tree
              className="overflow-hidden bg-background p-2 z-0 h-full w-full rounded-xl border"
              initialSelectedId="7"
              initialExpandedItems={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
              ]}
            >
              <InteractiveGridPattern
                className={cn(
                  "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
              />
              <Folder element="Frameworks" value="1">
                <Folder value="2" element="backend-api">
                  <File value="3" fileIcon={<SiPhp />}>
                    <p>laravel.php</p>
                  </File>
                  <File value="4" fileIcon={<SiNestjs />}>
                    <p>nest.js</p>
                  </File>
                </Folder>
                <Folder value="5" element="web-frontend">
                  <File value="6" fileIcon={<SiReact />}>
                    <p>react.js</p>
                  </File>
                  <File value="7" fileIcon={<SiTailwindcss />}>
                    <p>tailwind.css</p>
                  </File>
                  <File value="8" fileIcon={<SiNextdotjs />}>
                    <p>next.js</p>
                  </File>
                  {/* <File value="9" fileIcon={<SiNuxtdotjs />}>
                    <p>nuxt.js</p>
                  </File> */}
                </Folder>
                <Folder value="10" element="cross-platform">
                  <Folder value="11" element="mobile">
                    <File value="12" fileIcon={<SiReact />}>
                      <p>react-native.js</p>
                    </File>
                    <File value="13" fileIcon={<SiFlutter />}>
                      <p>flutter.dart</p>
                    </File>
                  </Folder>
                  <Folder value="14" element="desktop">
                    <File value="15" fileIcon={<SiElectron />}>
                      <p>electron.js</p>
                    </File>
                  </Folder>
                </Folder>
              </Folder>
            </Tree>
          </div>
          <div className="bg-amber-100 rounded-2xl">
            <Terminal>
              <TypingAnimation>$ Languages</TypingAnimation>
              <AnimatedSpan className="text-blue-500">
                ✔ PHP [Laravel full-stack development]
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-500">
                ✔ Javascript [NodeJS full-stack development]
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-500">
                ✔ Typescript [Typesafe full-stack development]
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-500">
                ✔ Python [Learning DSA and scripting]
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-500">
                ✔ SQL [DBMS, queries, and optimization]
              </AnimatedSpan>
            </Terminal>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-2xl">
            <div className="w-full rounded-md border flex justify-start items-center gap-3 px-3">
              <SiGit className="w-6 h-6 text-orange-500" />
              <div>Git</div>
            </div>
            <div className="w-full rounded-md border flex justify-start items-center gap-2 p-3">
              <FcLinux className="w-6 h-6" />
              <div>Linux</div>
            </div>
            <div className="w-full rounded-md border flex justify-start items-center gap-2 p-3">
              <SiDocker className="w-6 h-6 text-blue-500" />
              <div>Docker</div>
            </div>
            <div className="w-full rounded-md border flex justify-start items-center gap-2 p-3">
              <SiFigma className="w-6 h-6" />
              <div>Figma</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
