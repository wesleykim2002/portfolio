import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: 'Tech Company Inc.',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2022 - Present',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    achievements: [
      'Built a real-time collaboration platform serving 50K+ users',
      'Improved application performance by 40% through optimization',
      'Led a team of 5 developers in delivering key features',
    ],
  },
  {
    company: 'Startup Solutions',
    position: 'Full Stack Developer',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed and maintained multiple client-facing web applications.',
    achievements: [
      'Architected and built 3 major web applications from scratch',
      'Integrated third-party APIs to enhance product functionality',
      'Reduced deployment time by 60% through CI/CD automation',
    ],
  },
  {
    company: 'Digital Agency',
    position: 'Junior Developer',
    period: 'Jun 2018 - Feb 2020',
    description: 'Created responsive websites and collaborated with design teams.',
    achievements: [
      'Delivered 20+ client projects on time and within budget',
      'Implemented responsive designs with cross-browser compatibility',
      'Contributed to internal tools that improved team efficiency',
    ],
  },
];

export function WorkExperience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-blue-600 mb-1">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <Briefcase size={18} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                  >
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
