import { GraduationCap, Award, Calendar, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { SkillBars } from './SkillBars';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const education: EducationItem[] = [
  {
    degree: 'B.A.Sc. - Mechatronics Engineering',
    institution: 'University of Waterloo',
    period: '2020 - 2025',
    description: 'Bachelor of Applied Science in Mechatronics Engineering with Software Engineering Option.',
    achievements: [
      'GPA: 3.9/4.0',
      'President\'s Scholarship of Distinction',
    ],
  },
];

// const certifications = [
//   'AWS Certified Solutions Architect',
//   'Google Professional Cloud Developer',
//   'MongoDB Certified Developer',
//   'React Advanced Certification',
// ];

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="min-h-screen py-20 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="space-y-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-blue-600 mb-1">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <GraduationCap size={18} />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{edu.description}</p>
              
              {edu.achievements && (
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
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
              )}
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          className="bg-white rounded-lg p-8 shadow-md mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={24} className="text-blue-600" />
            <h3 className="text-2xl">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Award size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
