export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageColor: string;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  type: 'fulltime' | 'internship';
};

export type EducationInfo = {
  degree: string;
  school: string;
  period: string;
  summary: string;
  achievements: string[];
};

export type PortfolioSkill = {
  name: string;
  color: string;
};

export const portfolio = {
  person: {
    name: 'Wesley Kim',
    location: 'Toronto, ON',
    email: 'wes.software.dev@gmail.com',
  },
  links: {
    github: 'https://github.com/wesleykim2002',
    linkedin: 'https://linkedin.com/in/wes-kim',
  },
  about: {
    roles: [
      'Software Developer',
      'Full Stack Developer',
      'Mechatronics Engineer',
      'Problem Solver',
    ],
    lines: [
      "I'm a UW Mechatronics Engineering graduate with a passion for software development.",
      "I love building things that solve real problems and make people's lives easier.",
      "When I'm not coding, you can find me at the Rogers Center cheering on the Blue Jays or out on a lake fishing. Don't talk to me about November 1, 2025.",
    ],
  },
  skills: [
    { name: 'Python', color: 'text-[#3776AB]' },
    { name: 'Django', color: 'text-[#092E20]' },
    { name: 'React', color: 'text-[#61DAFB]' },
    { name: 'TypeScript', color: 'text-[#3178C6]' },
    { name: 'JavaScript', color: 'text-[#F7DF1E]' },
    { name: 'Go', color: 'text-[#00ADD8]' },
    { name: 'Next.js', color: 'text-[#000000]' },
    { name: 'Node.js', color: 'text-[#339933]' },
    { name: 'SQL', color: 'text-[#003B57]' },
    { name: 'PostgreSQL', color: 'text-[#4169E1]' },
    { name: 'MongoDB', color: 'text-[#47A248]' },
    { name: 'AWS', color: 'text-[#FF9900]' },
    { name: 'Docker', color: 'text-[#2496ED]' },
    { name: 'Flask', color: 'text-[#000000]' },
    { name: 'Jinja', color: 'text-[#B41717]' },
    { name: 'Selenium', color: 'text-[#43B02A]' },
    { name: 'Redis', color: 'text-[#DC382D]' },
    { name: 'Postman', color: 'text-[#FF6C37]' },
    { name: 'PHP', color: 'text-[#777BB4]' },
    { name: 'GraphQL', color: 'text-[#E10098]' },
    { name: 'YAML', color: 'text-[#CB171E]' },
    { name: 'Git', color: 'text-[#F05032]' },
    { name: 'Jenkins', color: 'text-[#D24939]' },
    { name: 'Drone', color: 'text-[#212121]' },
  ] as PortfolioSkill[],
  education: {
    degree: 'B.A.Sc. - Mechatronics Engineering',
    school: 'University of Waterloo',
    period: '2020 - 2025',
    summary: 'Bachelor of Applied Science in Mechatronics Engineering with Software Engineering Option.',
    achievements: [
      'GPA: 3.9/4.0',
      "Dean's List all semesters",
      'President\'s Scholarship of Distinction recipient',
      'Relevant Coursework: Data Structures and Algorithms, Software Design and Architectures, Programming for Performance',
    ],
  } as EducationInfo,
  // certifications: [
  //   'AWS Certified Solutions Architect',
  //   'Google Professional Cloud Developer',
  //   'MongoDB Certified Developer',
  //   'React Advanced Certification',
  // ],
  experiences: [
    {
      company: 'Achievers',
      position: 'Software Engineer',
      period: 'Nov 2025 - Present',
      location: 'Toronto, ON',
      description: [
        'Shipped end-to-end recognition & approvals features (React, GraphQL, TypeScript), improving admin workflows.',
        'Optimized BigQuery reporting by refactoring temporal joins in YAML templates.',
      ],
      type: 'fulltime',
    },
    {
      company: 'Deliverect',
      position: 'Software Software Developer',
      period: 'May 2024 - Aug 2024',
      location: 'Toronto, ON',
      description: [
        'Optimized POS API integrations (Flask, Eve), improving compatibility with Shopify, Square, DoorDash, and Toast.',
        'Implemented API health checks (key validation, request monitoring) to improve reliability.',
        'Improved backend scheduling and error handling, increasing system reliability across integrations.',
        'Collaborated with PMs and partners to resolve API incompatibilities and deliver integration solutions.',
        'Built menu validation tools ensuring API compliance (MongoDB, Grafana).',
      ],
      type: 'internship',
    },
    {
      company: 'Martinrea International',
      position: 'Back End Developer',
      period: 'Sep 2023 - Dec 2023',
      location: 'Vaughan, ON',
      description: [
        'Built a Python-based web app generator that outputs Django backend + frontend via Jinja2 templates.',
        'Implemented SSL and OAuth for secure server communication and client authentication.',
        'Designed Django API architecture with SMTP-based user authentication and admin management.',
        'Built Python scripts for image processing (PIL) and CSV database ingestion.',
      ],
      type: 'internship',
    },
    {
      company: 'Aisha Comfortable Coliving',
      position: 'Full Stack Developer',
      period: 'Jan 2023 - May 2023',
      location: 'Ottawa, ON',
      description: [
        'Designed and built Django backend architecture for a home services platform.',
        'Configured AWS IAM policies and S3 buckets for secure file uploads.',
        'Integrated REST APIs with frontend using Axios and Redux (Material UI).',
      ],
      type: 'internship',
    },
    {
      company: 'UKG',
      position: 'Software Engineering',
      period: 'May 2022 - Aug 2022',
      location: 'Toronto, ON',
      description: [
        'Automated E2E testing with Selenium for recruiting platform frontend.',
        'Resolved TypeScript frontend bugs improving recruiter-applicant communication.',
        'Validated SMS functionality using MongoDB Atlas data analysis.',
      ],
      type: 'internship',
    },
    {
      company: 'JSI',
      position: 'Software Developer',
      period: 'Sep 2021 - Dec 2021',
      location: 'Ottawa, ON',
      description: [
        'Built Java tool converting Apache Solr queries (XML → JSON) for improved readability.',
        'Redesigned JavaFX GUI to improve usability and information display.',
        'Packaged translator as plugin using Jenkins CI and Gradle builds.',
      ],
      type: 'internship',
    },
    {
      company: 'Oxilight',
      position: 'Hardware Engineer',
      period: 'Jan 2021 - Apr 2021',
      location: 'Toronto, ON',
      description: [
        'Redesigned PCB in KiCAD (test points, voltage regulator, level shifters) to improve functionality and debugging.',
        'Improved wearable vitals device durability through mechanical cable redesign.',
        'Generated BOMs in Excel to track inventory and costs.',
      ],
      type: 'internship',
    },
  ] as Experience[],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.example.com',
      imageColor: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop interface, real-time updates, and team features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.example.com',
      imageColor: 'from-purple-500 to-pink-500',
    },
  ] as Project[],
};
