import { projects } from "../../../data/projects";

export default function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find(
    (project) => project.id === Number(params.id)
  );

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main>
      <h1>{project.name}</h1>

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

      <p>
        ⭐ {project.stars.toLocaleString()} stars
      </p>

      <p>
        {project.beginnerFriendly
          ? "🟢 Beginner Friendly"
          : "🔴 Not Beginner Friendly"}
      </p>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </main>
  );
}