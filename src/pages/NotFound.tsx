import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-3xl">404</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        nothing here.{" "}
        <Link to="/" className="text-foreground underline underline-offset-4">
          go home
        </Link>
      </p>
    </>
  );
}
