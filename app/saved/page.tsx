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
      <h1>Saved Projects</h1>

      {savedProjects.length === 0 ? (
        <p>No saved projects yet.</p>
      ) : (
        <div>
          {savedProjects.map((project) => (
            <div key={project.id}>
              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <Link href={`/projects/${project.id}`}>
                View Details
              </Link>

              <hr />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}