import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { formatDate, hostOf, posts, type Post } from "../blog";

export function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span key={t} className="rounded-full bg-chip px-2 py-0.5 text-[11px] font-medium text-foreground/80">
          {t}
        </span>
      ))}
    </div>
  );
}

// External posts open the original article in a new tab; local ones route internally.
export function PostLink({ post, className, children }: { post: Post; className?: string; children: ReactNode }) {
  if (post.url) {
    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={`/blog/${post.slug}`} className={className}>
      {children}
    </Link>
  );
}

export function Blog() {
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl">blog</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        thoughts on ai, engineering, and building better systems.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">posts coming soon.</p>
      ) : (
        <ul className="mt-10 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostLink
                post={post}
                className="block rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-foreground/25"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-semibold">{post.title}</h2>
                  <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                </div>
                {post.summary && <p className="mt-2 text-sm text-muted-foreground">{post.summary}</p>}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <Tags tags={post.tags} />
                  {post.url && (
                    <span className="inline-flex items-center gap-0.5 text-xs text-muted-foreground">
                      {hostOf(post.url)}
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  )}
                </div>
              </PostLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
