'use client';

import CustomVideo from "./components/CustomVideo";
import React, { useState } from "react";

interface ProjectData {
  name: string;
  description: string;
  video: string;
}

const projects: ProjectData[] = [
  {
    name: "2JS",
    description:
      "The description captures the essence of '2JS' a portfolio website designed with an artistic flair, featuring 3D models. The website's primary purpose is to showcase the developer's skills and projects in a visually appealing manner. The inclusion of 3D models adds a unique and immersive element, creating an interactive experience for visitors. The emphasis on a visually appealing design and interactive features aims to engage users while effectively presenting the developer's work.",
    video: "/SJ.mp4",
  },

  {
    name: "Know Yourself Better",
    description:
      "Know Yourself Better is a self-discovery platform with a clear vision to help individuals find the inner spark that acts as a flame within themselves. This internal flame, once ignited, serves as a source of motivation and inspiration. The platform is dedicated to guiding users on a journey of self-exploration, offering insights and tools to uncover their strengths and potential. It addresses life problems from various perspectives, including physical, mental, vital, and spiritual aspects, providing a holistic approach to personal development.",
    video: "/KYB.mp4", 
  },

  {
    name: "AuroPay",
    description:
      "AuroPay is a secure and user-friendly payment service app that offers a multi-platform experience, integrating seamlessly with popular payment gateways. It introduces the innovative AuroPay Balance feature, allowing users to load funds easily and simplifying transactions. With a commitment to security, transparency, and decentralization, AuroPay ensures robust encryption for secure transactions. The platform includes a Scanning option for hassle-free navigation and supports real-time transaction tracking. AuroPay's dedicated customer support system promptly addresses user queries, issues, and disputes, while also adhering to government compliance requirements.",
    video: "/AuroPay.mp4",
  },
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Display "Projects" heading at the top center */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-2xl lg:flex">
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4" style={{ background: 'rgba(224, 129, 246, 0.45)' }}>
          Projects
        </p>
      </div>
      <br/>
      {/* Display list of projects below the heading */}
      <div className="mb-8 text-center lg:max-w-5xl lg:w-full mx-auto lg:grid lg:grid-cols-4 lg:text-center justify-center" >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-purple-100 flex justify-center"
          >
            <a
              href={`#${project.name}`}
              className="mb-3 text-xl font-mono"
              onClick={() => handleProjectClick(project)}
            >
              {project.name}
            </a>
          </div>
        ))}
      </div>

      {/* Display selectedProject video and description below the list of projects */}
      {selectedProject && (
        <div className="mb-8 text-center justify-center">
          <div className="p-8 text-black">
            <p>{selectedProject.description}</p>
          </div>
          <div className="p-8">
            <CustomVideo
              videos={[selectedProject.video]}  // Change from src to videos
              alt={selectedProject.name}
              width={"1000"}  // Adjust the width as needed
              height={"750"}  // Adjust the height as needed
              // onClick={() => console.log('Video clicked')}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
