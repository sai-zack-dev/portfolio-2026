import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectById, getRelatedProjects, categoryStyle } from "@/data/projects";

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return notFound();
  const related = getRelatedProjects(project);

  return (
    <div className="min-h-screen">
      <main className="w-full max-w-3xl mx-auto py-24 px-6 flex flex-col gap-12">

        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors w-fit"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <span className={`inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${categoryStyle[project.category]}`}>
            {project.category}
          </span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                {project.subtitle}
              </p>
            )}
          </div>
          <p className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            {project.description}
          </p>
        </div>

        {/* NDA Warning */}
        {project.nda && project.ndaNote && (
          <div className="flex items-center gap-3 p-3 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <span className="text-amber-500 mt-0.5 shrink-0">ℹ</span>
            <p className="text-sm text-amber-700 dark:text-amber-400">{project.ndaNote}</p>
          </div>
        )}

        {/* Action Links */}
        {(project.github || project.live || project.behance || project.npm) && (
          <div className="flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-mono hover:opacity-90 transition-opacity">
                ↗ Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                ↗ GitHub
              </a>
            )}
            {project.behance && (
              <a href={project.behance} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                ↗ Behance
              </a>
            )}
            {project.npm && (
              <a href={project.npm} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                ↗ npm
              </a>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag}
              className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              {tag}
            </span>
          ))}
        </div>

        {/* ── Preview Images ─────────────────────────────────────────────────── */}
        {project.images && project.images.length > 0 && (
          <div
            className={`grid gap-3 ${project.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
              }`}
          >
            {project.images.slice(0, 2).map((src, i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
                style={{ aspectRatio: project.images!.length === 1 ? "16/9" : "4/3" }}
              >
                <Image
                  src={src}
                  alt={`${project.title} preview ${i + 1}`}
                  fill
                  className="object-fill transition-transform duration-500 hover:scale-[1.02]"
                  sizes={
                    project.images!.length === 1
                      ? "(max-width: 768px) 100vw, 672px"
                      : "(max-width: 768px) 50vw, 328px"
                  }
                />
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        <Section label="Key Highlights">
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="text-zinc-300 dark:text-zinc-600 mt-0.5 shrink-0">◆</span>
                {h}
              </li>
            ))}
          </ul>
        </Section>

        {/* Dynamic README Sections */}
        {project.readme.map((section, i) => {
          if (section.type === "overview") {
            return (
              <Section key={i} label="Overview">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {section.content}
                </p>
              </Section>
            );
          }

          if (section.type === "features") {
            return (
              <Section key={i} label="Features">
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="text-zinc-300 dark:text-zinc-600 mt-0.5 shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            );
          }

          if (section.type === "tech_stack") {
            return (
              <Section key={i} label="Tech Stack">
                <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-sm">
                    <tbody>
                      {section.rows.map((row, j) => (
                        <tr key={j} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                          <td className="px-4 py-2.5 font-mono text-xs text-zinc-400 dark:text-zinc-500 w-32 bg-zinc-50 dark:bg-zinc-900/50">
                            {row.layer}
                          </td>
                          <td className="px-4 py-2.5 text-zinc-700 dark:text-zinc-300">
                            {row.tech}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            );
          }

          if (section.type === "api") {
            return (
              <Section key={i} label="API Endpoints">
                <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50">
                        <th className="px-4 py-2.5 text-left font-mono text-xs text-zinc-400 dark:text-zinc-500 w-16">Method</th>
                        <th className="px-4 py-2.5 text-left font-mono text-xs text-zinc-400 dark:text-zinc-500 w-32">Path</th>
                        <th className="px-4 py-2.5 text-left font-mono text-xs text-zinc-400 dark:text-zinc-500">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.endpoints.map((ep, j) => (
                        <tr key={j} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                          <td className="px-4 py-2.5">
                            <span className={`font-mono text-xs px-1.5 py-0.5 rounded ${ep.method === "GET"
                                ? "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400"
                                : "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400"
                              }`}>
                              {ep.method}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 font-mono text-xs text-zinc-500 dark:text-zinc-400">{ep.path}</td>
                          <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300 text-xs">{ep.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            );
          }

          if (section.type === "install") {
            return (
              <Section key={i} label="Installation & Setup">
                <div className="space-y-6">
                  {section.steps.map((step, j) => (
                    <div key={j} className="space-y-2">
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 font-semibold">
                        {step.title}
                      </p>
                      {step.code && (
                        <pre className="overflow-x-auto rounded-lg bg-zinc-900 dark:bg-zinc-950 text-zinc-100 text-xs p-4 font-mono leading-relaxed border border-zinc-800">
                          <code>{step.code}</code>
                        </pre>
                      )}
                      {step.note && (
                        <p className="text-xs text-zinc-400 dark:text-zinc-500 italic pl-1">
                          ℹ {step.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            );
          }

          if (section.type === "usage") {
            return (
              <Section key={i} label="Usage">
                <div className="space-y-3">
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{section.content}</p>
                  {section.code && (
                    <pre className="overflow-x-auto rounded-lg bg-zinc-900 dark:bg-zinc-950 text-zinc-100 text-xs p-4 font-mono leading-relaxed border border-zinc-800">
                      <code>{section.code}</code>
                    </pre>
                  )}
                </div>
              </Section>
            );
          }

          if (section.type === "downloads") {
            return (
              <Section key={i} label="Downloads — v1.0.0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.platforms.map((p, j) => (
                    <a key={j} href={p.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group">
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{p.platform}</span>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        {p.label} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </Section>
            );
          }

          if (section.type === "future") {
            return (
              <Section key={i} label="Roadmap / Future Plans">
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="text-zinc-300 dark:text-zinc-700 mt-0.5 shrink-0">○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>
            );
          }

          if (section.type === "note") {
            return (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <span className="text-zinc-400 mt-0.5 shrink-0 text-sm">ℹ</span>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{section.content}</p>
              </div>
            );
          }

          return null;
        })}

        {/* ── Related Projects ───────────────────────────────────────────────── */}
        {related.length > 0 && (
          <>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

            <Section label="Related Projects">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {related.map((rel) => {
                  // Count shared tags for the label
                  const sharedTags = rel.tags.filter((t) => project.tags.includes(t));
                  const reasonLabel =
                    rel.category === project.category
                      ? rel.category
                      : sharedTags[0] ?? rel.category;

                  return (
                    <Link
                      key={rel.id}
                      href={`/projects/${rel.id}`}
                      className="group flex flex-col gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-white dark:hover:bg-zinc-900 transition-all"
                    >
                      {/* Category chip + reason */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryStyle[rel.category]}`}
                        >
                          {rel.category}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 truncate">
                          {reasonLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                          {rel.title}
                        </p>
                        {rel.subtitle && (
                          <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600 mt-0.5">
                            {rel.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                        {rel.description}
                      </p>

                      {/* Arrow */}
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors mt-auto">
                        View project →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Section>
          </>
        )}
      </main>
    </div>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        {label}
      </h2>
      {children}
    </div>
  );
}