import { Link } from "react-router-dom";
import { FileText, Mail } from "lucide-react";
import { about, experience, profile, projects } from "../content";
import { posts } from "../blog";
import { Section } from "../components/Section";
import { ExperienceItem } from "../components/ExperienceItem";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

const linkClass = "text-foreground transition-colors hover:text-foreground/70";

export function Home() {
  const email = `${profile.emailUser}@${profile.emailDomain}`;

  return (
    <>
      {/* Photo with handwritten sticker */}
      <div className="relative mb-10 inline-block pt-6 sm:mb-12">
        <img
          src={profile.photo}
          alt={profile.name}
          className="size-36 rounded-full border border-border object-cover object-[50%_35%] sm:size-40"
        />
        <span className="absolute left-1/2 top-0 -translate-x-1/3 -rotate-6 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1 font-hand text-xl leading-tight shadow-sm">
          Hey, I'm
          <br />
          {profile.firstName} 👋
        </span>
      </div>

      <Section id="about" title="about me">
        <div className="space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <a
          href={profile.resume}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          <FileText className="size-4" />
          download resume
        </a>
      </Section>

      <Section id="experience" title="experience">
        <ul className="space-y-8">
          {experience.map((item) => (
            <ExperienceItem key={item.company + item.role} item={item} />
          ))}
        </ul>
      </Section>

      <Section id="work" title="work">
        <ul className="space-y-2 sm:space-y-3">
          {projects.map((p) => (
            <li key={p.name} className="text-sm sm:text-base">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {p.name}
                </a>
              ) : (
                <span>{p.name}</span>
              )}
              <span className="mt-1 block text-xs text-muted-foreground sm:ml-2 sm:mt-0 sm:inline sm:text-sm">
                ({p.description})
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="writing" title="writing">
        {posts.length > 0 ? (
          <ul className="space-y-2 sm:space-y-3">
            {posts.slice(0, 5).map((post) => (
              <li key={post.slug} className="text-sm sm:text-base">
                <Link to={`/blog/${post.slug}`} className={linkClass}>
                  {post.title.toLowerCase()}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-xs sm:text-sm">
              <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                all posts →
              </Link>
            </li>
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">posts coming soon.</p>
        )}
      </Section>

      <Section id="contact" title="contact me">
        <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
          you can reach me at{" "}
          <code className="rounded bg-chip px-1.5 py-0.5 font-mono text-xs">x@{profile.emailDomain}</code> where{" "}
          <code className="rounded bg-chip px-1.5 py-0.5 font-mono text-xs">x = {profile.emailUser}</code>
        </p>
        <div className="mt-5 flex items-center gap-4">
          <a href={`mailto:${email}`} aria-label="Email" className={linkClass}>
            <Mail className="size-5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClass}>
            <GithubIcon className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClass}>
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </Section>
    </>
  );
}
