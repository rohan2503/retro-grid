import { ThemeProvider } from "@/components/ThemeContext";
import RetroGrid from "@/components/RetroGrid";
import TextRevealByWord from "@/components/TextRevealByWord";
import { VelocityScroll } from "@/components/VelocityScroll";
import ProjectCards from "@/components/ProjectCards";
import Dock from "@/components/dock";

export default function Home() {
  const projects = [
    { 
      title: "Project 1", 
      description: "A responsive product page featuring an intuitive image gallery with custom navigation, and attention to user experience.",
      imageUrl: "/images/ss2.jpg",
      githubLink: "https://github.com/rohan2503/product-page",
      websiteLink: "https://product-page-rohan.vercel.app/",
    },
    { 
      title: "Project 2", 
      description: "Easy Rent is a sleek NYC subletting platform linking property owners with reliable tenants.",
      imageUrl: "/images/ss11.jpg",
      githubLink: "https://github.com/rohan2503/kiki",
      websiteLink: "https://rohan-kiki.vercel.app/",
    },
    { 
      title: "Project 3", 
      description: "Built a cloud-based click-tracking app with JWT authentication, RESTful APIs, and a real-time dashboard, deployed on AWS.",
      imageUrl: "/images/ss5.jpg",
      githubLink: "https://github.com/yourusername/project3",
      websiteLink: "http://cloudclickerenv.eba-4fpezeke.us-east-1.elasticbeanstalk.com/",
    },
    { 
      title: "Project 4", 
      description: "My old interactive portfolio developed using three.js and react",
      imageUrl: "/images/ss3.jpg",
      githubLink: "https://github.com/rohan2503/updated-portfolio",
      websiteLink: "https://rohan-cloud-portfolio.vercel.app/",
    },
    { 
      title: "Project 5", 
      description: "An interactive 3D particle animation forming an infinity symbol",
      imageUrl: "/images/ss4.jpg",
      githubLink: "https://github.com/rohan2503/infinite",
      websiteLink: "https://rohan-particle-experiment.vercel.app/",
    },
  ];

  return (
    <ThemeProvider>
      <main className="relative w-full min-h-screen transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
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
          className="bg-white dark:bg-black"
        />
        <div className="py-20">
          <VelocityScroll 
            text="Projects/ Experiments/ " 
            default_velocity={5} 
            className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          />
        </div>
        <ProjectCards projects={projects} />
      </main>
    </ThemeProvider>
  );
}