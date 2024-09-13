"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaGithub, FaGlobe } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  websiteLink?: string;
}

interface ProjectCardsProps {
  projects: Project[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8],
    ['0%', '0%', `-${(projects.length - 1) * 100}%`]
  );

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div ref={ref} className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Interactive Card with Subtle Retro Gradient Border and Shadow */}
              <motion.div
                className="rounded-xl p-1 bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fbc2eb] shadow-lg dark:shadow-white/10"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)" }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white dark:bg-black rounded-lg p-6 flex items-center justify-center">
                  <div className="relative w-[1000px] h-[600px]">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Text Line Below the Card with Buttons */}
              <div className="flex items-center justify-between w-full max-w-[1100px] mt-4 px-8">
                <p className="text-xl text-black dark:text-white">{project.description}</p>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-colors">
                        <FaGithub className="text-1xl text-black dark:text-white" />
                      </div>
                    </a>
                  )}
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 transition-colors">
                        <FaGlobe className="text-2xl text-black dark:text-white" />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCards;