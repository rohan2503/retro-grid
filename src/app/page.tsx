// page.tsx

import RetroGrid from "@/components/RetroGrid";
import TextRevealByWord from "@/components/TextRevealByWord";
import { VelocityScroll } from "@/components/VelocityScroll";
import ProjectCards from "@/components/ProjectCards";
import Dock from "@/components/dock";

export default function Home() {
  const projects = [
    { 
      title: "Project 1", 
      description: "This is a description of project 1.",
      imageUrl: "/images/ss2.jpg",
      githubLink: "https://github.com/yourusername/project1",
      websiteLink: "https://www.project1.com",
    },
    { 
      title: "Project 2", 
      description: "This is a description of project 2.",
      imageUrl: "/images/ss11.jpg",
      githubLink: "https://github.com/yourusername/project2",
      websiteLink: "https://www.project2.com",
    },
    { 
      title: "Project 3", 
      description: "This is a description of project 3.",
      imageUrl: "/images/ss5.jpg",
      githubLink: "https://github.com/yourusername/project3",
      websiteLink: "https://www.project3.com",
    },
    { 
      title: "Project 4", 
      description: "This is a description of project 4.",
      imageUrl: "/images/ss3.jpg",
      githubLink: "https://github.com/yourusername/project4",
      websiteLink: "https://www.project4.com",
    },
    { 
      title: "Project 5", 
      description: "This is a description of project 5.",
      imageUrl: "/images/ss4.jpg",
      githubLink: "https://github.com/yourusername/project5",
      websiteLink: "https://www.project5.com",
    },
  ];

  return (
    <main className="relative w-full bg-black text-white">
      {/* Hero section with RetroGrid */}
      <div className="relative h-screen overflow-hidden">
        <RetroGrid className="z-0" />
        <div className="absolute inset-0 flex flex-col items-center">
          <div className="mt-8">
            <Dock />
          </div>
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
              Rohan.
            </h1>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <TextRevealByWord 
        text="Frontend. Backend. UI/UX. Web development."
        className="bg-black"
      />
      <div className="py-20">
        <VelocityScroll 
          text="Projects/ Experiments/ " 
          default_velocity={5} 
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        />
      </div>
      <ProjectCards projects={projects} />
    </main>
  );
}
