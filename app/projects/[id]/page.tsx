import SaveButton from "../../../components/SaveButton";
import { projects } from "../../../data/projects";
export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (project) => String(project.id) === id
  );

  if (!project) {
    return (
      <main>
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="project-details">
      <div className ="details-card">
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

      <br />

     <SaveButton projectId={project.id} />

        <br />
        <br />

        <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        >
        View on GitHub
        </a>
      </div>
    </main>
  );
}