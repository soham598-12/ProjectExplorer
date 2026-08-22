"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [beginnerOnly, setBeginnerOnly] = useState(false);

  // Get unique domains from projects data
  const domains = [
    ...new Set(projects.map((project) => project.domain)),
  ];

  // Get unique difficulties from projects data
  const difficulties = [
    ...new Set(projects.map((project) => project.difficulty)),
  ];

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setSelectedDomain("All");
    setSelectedDifficulty("All");
    setBeginnerOnly(false);
  };

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDomain =
      selectedDomain === "All" ||
      project.domain === selectedDomain;

    const matchesDifficulty =
      selectedDifficulty === "All" ||
      project.difficulty === selectedDifficulty;

    const matchesBeginner =
      !beginnerOnly || project.beginnerFriendly;

    return (
      matchesSearch &&
      matchesDomain &&
      matchesDifficulty &&
      matchesBeginner
    );
  });

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

        {/* Domain Filter */}
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
        >
          <option value="All">All Domains</option>

          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) =>
            setSelectedDifficulty(e.target.value)
          }
        >
          <option value="All">All Difficulties</option>

          {difficulties.map((difficulty) => (
            <option
              key={difficulty}
              value={difficulty}
            >
              {difficulty}
            </option>
          ))}
        </select>

        {/* Beginner Filter */}
        <label className="checkbox-filter">
          <input
            type="checkbox"
            checked={beginnerOnly}
            onChange={(e) =>
              setBeginnerOnly(e.target.checked)
            }
          />

          <span>Beginner Friendly Only</span>
        </label>

        <button
          className="clear-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* Results Count */}
      <p className="results-count">
        {filteredProjects.length} projects found
      </p>

      {/* Project Cards */}
      {filteredProjects.length > 0 && (
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
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="no-results">
          <h2>No projects found 😕</h2>
          <p>
            Try changing your search or filters.
          </p>
        </div>
      )}
    </main>
  );
}