import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const items = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "work", label: "work" },
  { id: "writing", label: "writing" },
  { id: "contact", label: "contact" },
];

export function Nav() {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);

  // Hide while scrolling down, show again on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function jump(e: MouseEvent, id: string) {
    if (pathname !== "/") return; // let the router go home, ScrollManager handles the hash
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-300 sm:top-6 ${
        hidden ? "-translate-y-20 opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-0 rounded-full border border-border bg-background/80 py-1 pl-1.5 pr-1 min-[400px]:gap-0.5 min-[400px]:pl-2 shadow-sm backdrop-blur-md sm:gap-1 sm:pl-3">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/#${item.id}`}
            onClick={(e) => jump(e, item.id)}
            className="rounded-full px-1 py-1 text-xs min-[400px]:px-1.5 text-muted-foreground transition-colors hover:text-foreground sm:px-2.5 sm:text-sm"
          >
            {item.label}
          </Link>
        ))}
        <span className="mx-0.5 h-4 w-px min-[400px]:mx-1 bg-border" aria-hidden="true" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
