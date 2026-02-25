import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const roles = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Tech Innovator',
];

export function About() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl flex-shrink-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
          >
            YN
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <motion.p 
              className="text-blue-600 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-5xl mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Name
            </motion.h1>
            
            <motion.div 
              className="text-2xl text-gray-600 mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I'm a passionate developer with experience in building modern web applications. 
              I love creating intuitive user experiences and solving complex problems with clean, 
              efficient code. When I'm not coding, you can find me exploring new technologies 
              and contributing to open-source projects.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MapPin size={18} />
              <span>San Francisco, CA</span>
            </motion.div>

            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
