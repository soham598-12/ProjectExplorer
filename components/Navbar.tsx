import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        OpenSource Explorer
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Explore Projects</Link>
        <Link href="/saved">Saved Projects</Link>
      </div>
    </nav>
  );
}