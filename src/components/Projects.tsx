const projects = [
  {
    id: '01',
    name: 'Fluid Builder',
    description: 'A powerful builder tool for creating fluid, responsive web applications with ease.',
    date: '2024 - Present',
    tags: ['TypeScript', 'Web Development', 'Builder Tool'],
    link: 'https://github.com/fluid-ecosystem/fluid-builder',
  },
  {
    id: '02',
    name: 'idb-ts',
    description: 'TypeScript wrapper for IndexedDB with a simple and intuitive API.',
    date: '2024',
    tags: ['TypeScript', 'IndexedDB', 'Library'],
    link: 'https://github.com/maifeeulasad/idb-ts',
  },
  {
    id: '03',
    name: 'Unmukto',
    description: 'Open-source project for Bengali content management and publishing.',
    date: '2024',
    tags: ['React', 'Bengali', 'Content Management'],
    link: 'https://github.com/maifeeulasad/unmukto',
  },
  {
    id: '04',
    name: 'SDAS (Smart Data Analysis System)',
    description: 'Intelligent system for data analysis and visualization.',
    date: '2024',
    tags: ['Python', 'Data Analysis', 'ML'],
    link: 'https://github.com/maifeeulasad/SDAS',
  },
  {
    id: '05',
    name: 'React Pipeline',
    description: 'Pipeline management library for React applications.',
    date: '2023',
    tags: ['React', 'State Management', 'Pipeline'],
    link: 'https://github.com/maifeeulasad/react-pipeline',
  },
  {
    id: '06',
    name: 'Persistent State React',
    description: 'Persistent state management solution for React applications.',
    date: '2023',
    tags: ['React', 'State Management', 'LocalStorage'],
    link: 'https://github.com/maifeeulasad/persistent-state-react',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-2xl font-medium text-white uppercase tracking-wider">PROJECTS</h2>
          </div>
          <div className="border-b border-gray-600 pb-4"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4 space-y-4">
                <div className="text-gray-400 text-sm">({project.id})</div>
                <div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-4 cursor-pointer hover:text-gray-300 transition-colors leading-tight block"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-400 leading-tight text-base">{project.description}</p>
                  <div className="text-xs text-gray-500 mt-3">{project.date}</div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-3">
                {project.tags.map((tag) => (
                  <div key={tag} className="text-gray-400 text-sm leading-relaxed">{tag}</div>
                ))}
              </div>

              <div className="lg:col-span-4">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
