import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          OpenSource Explorer
        </Link>
      </div>

      <div>
        <Link href="/">Home</Link>

        <Link href="/projects">
          Explore Projects
        </Link>

        <Link href="/saved">
          Saved Projects
        </Link>
      </div>
    </nav>
  );
}