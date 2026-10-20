import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { formatDate, posts } from "../blog";
import { profile } from "../content";
import { Tags } from "./Blog";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — ${profile.name}`;
    return () => {
      document.title = `${profile.name} — AI Engineer`;
    };
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <article>
      <Link
        to="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> all posts
      </Link>

      <h1 className="mt-6 text-2xl font-bold sm:text-3xl">{post.title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="text-sm tabular-nums text-muted-foreground">{formatDate(post.date)}</span>
        <Tags tags={post.tags} />
      </div>

      <div className="prose mt-8 max-w-none prose-pre:rounded-lg sm:prose-lg">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
