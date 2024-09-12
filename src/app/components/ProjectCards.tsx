"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
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
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8],
    ["0%", "0%", `-${(projects.length - 1) * 100}%`]
  );

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div ref={ref} className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          className="flex items-center h-full"
          style={{ x }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-screen h-3/4 p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-1/2 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
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