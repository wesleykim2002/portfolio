import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolio } from '../data/portfolio';

export function WorkExperience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="experience-container">
        <motion.h2 
          className="experience-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="experience-list">
          {portfolio.experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="experience-header">
                <div className="experience-role">
                  <div className="experience-role-line">
                    <h3 className="experience-position">{exp.position}</h3>
                    {exp.type === 'fulltime' && (
                      <span className="experience-badge">
                        Full-time
                      </span>
                    )}
                  </div>
                  <div className="experience-company">
                    <Briefcase size={16} />
                    <span className="experience-company-name">{exp.company}</span>
                  </div>
                </div>
                <div className="experience-period">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="experience-achievement"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.08 + i * 0.05 + 0.2 }}
                  >
                    <span className="experience-bullet">•</span>
                    <span className="experience-achievement-text">{achievement}</span>
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
