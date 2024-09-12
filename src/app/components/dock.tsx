"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Pencil, Github, Linkedin, Twitter, Mail, Sun } from 'lucide-react';

const icons = [
  { Icon: Home, href: '#' },
  { Icon: Pencil, href: '#' },
  { Icon: Github, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Mail, href: '#' },
  { Icon: Sun, href: '#' },
];

const Dock: React.FC = () => {
  return (
    <motion.div 
      className="inline-block bg-black/50 backdrop-blur-md rounded-full p-2"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex space-x-4">
        {icons.map(({ Icon, href }, index) => (
          <motion.a
            key={index}
            href={href}
            className="relative p-2 rounded-full hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Dock;