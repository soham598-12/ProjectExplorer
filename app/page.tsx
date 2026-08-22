import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-badge">
          🚀 Discover • Learn • Contribute
        </div>

        <h1>
          Discover Your Next
          <span> Open Source Project</span>
        </h1>

        <p>
          Explore open-source projects, discover technologies,
          and find beginner-friendly opportunities to start
          contributing.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="primary-btn">
            Explore Projects →
          </Link>

          <Link href="/saved" className="secondary-btn">
            View Saved Projects
          </Link>
        </div>
      </section>
    </main>
  );
}