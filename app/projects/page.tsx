import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1>Explore Open Source Projects</h1>

      <p>Discover projects you can learn from and contribute to.</p>

      <div>
        {projects.map((project) => (
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