"use client";
import { useState } from "react";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [beginnerOnly, setBeginnerOnly] = useState(false);
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
      <h1>Explore Open Source Projects</h1>

      <p>Discover projects you can learn from and contribute to.</p>
        <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
       <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            >
            <option value="All">All Domains</option>
            <option value="Web Development">Web Development</option>
            <option value="Backend">Backend</option>
            <option value="AI/ML">AI/ML</option>
            <option value="DevOps">DevOps</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Developer Tools">Developer Tools</option>
        </select>
        <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
            <option value="All">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select>
        <label>
            <input
                type="checkbox"
                checked={beginnerOnly}
                onChange={(e) => setBeginnerOnly(e.target.checked)}
            />

            Beginner Friendly Only
        </label>
      <div>
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <p>
              <strong>Domain:</strong> {project.domain}
            </p>

            <p>
              <strong>Technologies:</strong>{" "}
              {project.technologies.join(", ")}
            </p>

            <p>
              <strong>Difficulty:</strong> {project.difficulty}
            </p>

            <p>⭐ {project.stars.toLocaleString()}</p>

            <p>
              {project.beginnerFriendly
                ? "🟢 Beginner Friendly"
                : "🔴 Not Beginner Friendly"}
            </p>

            <hr />
          </div>
        ))}
      </div>
    </main>
  );
}