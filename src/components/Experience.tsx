const experiences = [
  {
    id: '01',
    logo: 'https://img.logo.dev/enerzyz.com?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    title: 'Full Stack Product Engineer',
    company: 'Enerzyz',
    description: 'Working as a one-man army, handling full-stack development and product engineering for innovative energy solutions.',
    tags: ['Full Stack', 'Product Development', 'Remote'],
    year: '2025',
    location: 'Remote, Chittagong, Bangladesh',
    period: 'May 2025 - Present',
  },
  {
    id: '02',
    logo: 'https://img.logo.dev/appflowsolutions.com?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    title: 'Machine Learning Engineer',
    company: 'AppFlow Solutions',
    description: 'Led the ML team, implementing machine learning solutions and driving AI-powered features.',
    tags: ['Machine Learning', 'Team Leadership', 'AI'],
    year: '2024',
    location: 'Remote, Faridabad, India',
    period: 'Aug 2024 - Oct 2024',
  },
  {
    id: '03',
    logo: 'https://img.logo.dev/appflowsolutions.com?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    title: 'Full Stack Engineer',
    company: 'AppFlow Solutions',
    description: 'Promoted from Backend Engineer to Full Stack Engineer, working on end-to-end application development.',
    tags: ['Full Stack', 'React', 'Node.js', 'Python'],
    year: '2023-24',
    location: 'Remote, Faridabad, India',
    period: 'Oct 2023 - Aug 2024',
  },
  {
    id: '04',
    logo: 'https://img.logo.dev/appflowsolutions.com?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    title: 'Backend Engineer',
    company: 'AppFlow Solutions',
    description: 'Started as a Backend Engineer, building scalable server-side applications and APIs.',
    tags: ['Backend', 'APIs', 'Database Design'],
    year: '2023',
    location: 'Remote, Faridabad, India',
    period: 'Jan 2023 - Sep 2023',
  },
  {
    id: '05',
    logo: 'https://img.logo.dev/endimension.com?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    title: 'Full Stack Engineer',
    company: 'Endimension Technology Pvt. Ltd.',
    description: 'Worked at a healthcare startup, understanding client requirements, prototyping, validating, and building polished solutions.',
    tags: ['Full Stack', 'Healthcare', 'Prototyping'],
    year: '2021-22',
    location: 'Remote, Mumbai, India',
    period: 'Aug 2021 - Jul 2022',
  },
];

const Experience = () => {
  return (
    <section id="work" className="bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-6 mb-4">
            <h2 className="text-xl sm:text-2xl font-medium text-white uppercase tracking-wider">
              EXPERIENCE
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-6">
                <div className="text-gray-500 text-sm font-mono">{exp.id}</div>
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 space-y-3">
                <div className="text-gray-400 text-sm uppercase tracking-wider">{exp.title}</div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight">
                  {exp.company}
                </h3>
                <p className="text-gray-400 text-base leading-tight">{exp.description}</p>
                <p className="text-gray-500 text-sm">{exp.location} • {exp.period}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-2 md:text-right">
                <div className="text-white text-xl md:text-2xl font-light">{exp.year}</div>
              </div>

              {exp.id !== '05' && <div className="col-span-12 h-px bg-gray-800 mt-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
