"use server";
export const getProjects = async () => {
  const res = await fetch(
    "https://portfolio-server-amber.vercel.app/api/v1/projects",
    {
      cache: "force-cache",
    }
  );
  const projects = await res.json();
  return projects;
};
