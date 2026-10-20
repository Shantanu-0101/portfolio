import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";
import { profile } from "../content";

// Scroll to the #hash after navigating, or to the top on a new page.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
        <Outlet />
      </main>
      <footer className="mx-auto max-w-3xl px-4 pb-10 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {profile.name.toLowerCase()}
      </footer>
    </>
  );
}
