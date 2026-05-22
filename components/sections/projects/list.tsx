"use client";
import Link from "next/link";
import { useState } from "react";
import { langColors, allLangs, getCategoriesWithProjects } from "@/data/projects";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  behance?: string;
  npm?: string;
  nda?: boolean;
  ndaNote?: string;
};

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = getCategoriesWithProjects();
  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.key === activeCategory);

  return (
    <div className="w-full space-y-16">
      {/* Language Bar */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-mono">
          Most Used Languages
        </p>
        <div className="flex flex-wrap gap-2">
          {allLangs.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: langColors[lang] }}
              />
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${activeCategory === "all"
              ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
              : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500"
            }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${activeCategory === cat.key
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
                : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500"
              }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Project Groups */}
      {filteredCategories.map((category) => (
        <section key={category.key} className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">{category.icon}</span>
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {category.label}
            </h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
              {category.projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex flex-col gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm transition-all duration-200 cursor-pointer"
    >
      {/* NDA badge */}
      {project.nda && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30">
          NDA
        </span>
      )}

      <div className="space-y-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug pr-10 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
        {project.nda && project.ndaNote && (
          <p className="text-[10px] font-mono text-amber-600 dark:text-amber-500 italic">
            ⚠ {project.ndaNote}
          </p>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}