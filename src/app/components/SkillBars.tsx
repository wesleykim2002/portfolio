import { motion } from 'motion/react';
import { useInView } from './useInView';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript / JavaScript', level: 90, color: 'bg-yellow-500' },
  { name: 'Node.js / Express', level: 85, color: 'bg-green-500' },
  { name: 'Python / Django', level: 80, color: 'bg-indigo-500' },
  { name: 'PostgreSQL / MongoDB', level: 85, color: 'bg-teal-500' },
  { name: 'AWS / Cloud Services', level: 75, color: 'bg-orange-500' },
  { name: 'UI/UX Design', level: 70, color: 'bg-pink-500' },
  { name: 'Docker / Kubernetes', level: 65, color: 'bg-purple-500' },
];

export function SkillBars() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <div className="space-y-6" ref={ref}>
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">{skill.name}</span>
            <motion.span 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${skill.color} rounded-full`}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
