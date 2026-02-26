import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolio } from '../data/portfolio';

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-2xl text-blue-600 mb-1">{portfolio.education.degree}</h3>
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <GraduationCap size={18} />
                <span className="font-medium">{portfolio.education.school}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} /> 
              <span>{portfolio.education.period}</span>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            {portfolio.education.summary}
          </p>
          
          <ul className="space-y-2">
            {portfolio.education.achievements.map((achievement, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* <motion.div 
          className="bg-white rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={24} className="text-blue-600" />
            <h3 className="text-2xl">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.7 + index * 0.1 }}
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
