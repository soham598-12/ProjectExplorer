"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [beginnerOnly, setBeginnerOnly] = useState(false);
    const clearFilters = () => {
        setSearch("");
        setSelectedDomain("All");
        setSelectedDifficulty("All");
        setBeginnerOnly(false);
    };
      const filteredProjects = projects.filter(
            (project) =>
                project.name.toLowerCase().includes(search.toLowerCase()) &&
                (selectedDomain === "All" ||
                project.domain === selectedDomain) &&
                (selectedDifficulty === "All" ||
                project.difficulty === selectedDifficulty) &&
                (!beginnerOnly || project.beginnerFriendly)
        );
  return (
  <main>
    <div className="page-header">
      <h1>Explore Open Source Projects</h1>
      <p>
        Discover projects you can learn from and contribute to.
      </p>
    </div>

    {/* Filters */}
    <div className="filters">
      <input
        type="text"
        placeholder="🔍 Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={selectedDomain}
        onChange={(e) => setSelectedDomain(e.target.value)}
      >
        <option value="">All Domains</option>

        {/* KEEP YOUR EXISTING DOMAIN OPTIONS HERE */}
      </select>

      <select
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        <option value="">All Difficulties</option>

        {/* KEEP YOUR EXISTING DIFFICULTY OPTIONS HERE */}
      </select>

      <label className="checkbox-filter">
        <input
          type="checkbox"
          checked={beginnerOnly}
          onChange={(e) => setBeginnerOnly(e.target.checked)}
        />
        Beginner Friendly Only
      </label>

      <button
        className="clear-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>

    <p className="results-count">
      {filteredProjects.length} projects found
    </p>

    {/* Project Cards */}
    <div className="projects-grid">
      {filteredProjects.map((project) => (
        <Link
          href={`/projects/${project.id}`}
          key={project.id}
          className="project-card"
        >
          <div className="project-card-top">
            <h2>{project.name}</h2>

            <span className="difficulty-badge">
              {project.difficulty}
            </span>
          </div>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-domain">
            📁 {project.domain}
          </div>

          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="project-card-bottom">
            <span className="stars">
              ⭐ {project.stars.toLocaleString()}
            </span>

            {project.beginnerFriendly ? (
              <span className="beginner">
                🟢 Beginner Friendly
              </span>
            ) : (
              <span className="not-beginner">
                🔴 Advanced
              </span>
            )}
          </div>

          <div className="view-project">
            View Project →
          </div>
        </Link>
      ))}
    </div>

    {filteredProjects.length === 0 && (
      <div className="no-results">
        <h2>No projects found 😕</h2>
        <p>Try changing your search or filters.</p>
      </div>
    )}
  </main>
);
}