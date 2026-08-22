"use client";

import { useEffect, useState } from "react";

export default function SaveButton({ projectId }: { projectId: number }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("savedProjects") || "[]"
    );

    setSaved(savedProjects.includes(projectId));
  }, [projectId]);

  const toggleSave = () => {
    const savedProjects = JSON.parse(
      localStorage.getItem("savedProjects") || "[]"
    );

    let updatedProjects;

    if (savedProjects.includes(projectId)) {
      updatedProjects = savedProjects.filter(
        (id: number) => id !== projectId
      );
    } else {
      updatedProjects = [...savedProjects, projectId];
    }

    localStorage.setItem(
      "savedProjects",
      JSON.stringify(updatedProjects)
    );

    setSaved(!saved);
  };

  return (
  <button className="save-btn" onClick={toggleSave}>
    {saved ? "★ Saved" : "☆ Save Project"}
  </button>
);
}