import { useState } from 'react';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolio } from '../data/portfolio';

export function WorkExperience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll
    ? portfolio.experiences
    : portfolio.experiences.slice(0, 3);

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
          {visibleExperiences.map((exp, index) => (
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
                    <span className="experience-badge">
                      {exp.type === 'fulltime' ? 'Full-time' : 'Internship'}
                    </span>
                  </div>
                  <div className="experience-company">
                    <Briefcase size={16} />
                    <span className="experience-company-name">{exp.company}</span>
                  </div>
                  <div className="experience-location">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="experience-period">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="experience-achievements">
                {exp.description.map((description, i) => (
                  <motion.li 
                    key={i} 
                    className="experience-achievement"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.08 + i * 0.05 + 0.2 }}
                  >
                    <span className="experience-bullet">•</span>
                    <span className="experience-achievement-text">{description}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {portfolio.experiences.length > 3 && (
          <div className="experience-actions">
            <button
              type="button"
              className="experience-toggle"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
