"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function SavedProjectsPage() {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("savedProjects") || "[]"
    );

    setSavedIds(savedProjects);
  }, []);

  const savedProjects = projects.filter((project) =>
    savedIds.includes(project.id)
  );

  return (
    <main>
      <div className="page-header">
        <h1>Saved Projects</h1>
        <p>Your collection of open-source projects to explore later.</p>
      </div>

      {savedProjects.length > 0 ? (
        <>
          <p className="results-count">
            {savedProjects.length} saved projects
          </p>

          <div className="projects-grid">
            {savedProjects.map((project) => (
              <div key={project.id} className="project-card">
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

                <Link
                  href={`/projects/${project.id}`}
                  className="view-project"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="no-results">
          <h2>No saved projects yet 📌</h2>

          <p>
            Explore open-source projects and save the ones you want
            to revisit later.
          </p>

          <Link href="/projects" className="clear-btn">
            Explore Projects
          </Link>
        </div>
      )}
    </main>
  );
}