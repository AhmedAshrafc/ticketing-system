import DynamicTitle from "@/components/DynamicTitle";
import React, { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  // create a new project
  const createProject = async (e) => {
    e.preventDefault();
    const project = { title, body };
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    });
    const data = await res.json();
    setProjects([...projects, data]);
  };

  // delete a project
  const deleteProject = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  return (
    <>
      <DynamicTitle />

      <h1 className="text-4xl text-center font-bold mt-4">Projects</h1>

      <div>
        {/* create a form for add a new project */}
        <form onSubmit={createProject}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="submit">Add project</button>
        </form>

        {/* show all projects */}
        {/* {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
          </div>
        ))} */}
        {/* delete button */}
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <button onClick={() => deleteProject(project.id)}>
              Delete project
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
