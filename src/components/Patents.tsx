const contributions = [
  {
    name: 'GitHub Desktop - Critical Feature Implementation',
    description: 'Successfully implemented two critical features for GitHub Desktop in 2021, contributing to the open-source community.',
    year: '2021',
    link: 'https://github.com/desktop/desktop',
    type: 'Open Source Contribution',
  },
  {
    name: 'Overwatch - Network Monitoring Tool',
    description: 'Network monitoring and analysis tool for developers.',
    year: '2024',
    link: 'https://github.com/maifeeulasad/Overwatch',
    type: 'Open Source Project',
  },
  {
    name: 'MLauncher - Application Launcher',
    description: 'Efficient application launcher for improved productivity.',
    year: '2024',
    link: 'https://github.com/maifeeulasad/MLauncher',
    type: 'Open Source Project',
  },
  {
    name: 'Network React - Networking Library',
    description: 'React library for network operations and management.',
    year: '2023',
    link: 'https://github.com/maifeeulasad/network-react',
    type: 'Open Source Library',
  },
];

const Patents = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-2xl font-medium text-white uppercase tracking-wider">OPEN SOURCE CONTRIBUTIONS</h2>
          </div>
          <div className="border-b border-gray-600 pb-4"></div>
        </div>

        <div className="space-y-16">
          {contributions.map((contribution, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight hover:text-gray-300 transition-colors cursor-pointer block"
                  >
                    {contribution.name}
                  </a>
                  <p className="text-gray-400 text-base mt-1 leading-tight">
                    {contribution.description}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{contribution.type}</p>
                </div>
                <div className="text-right ml-8">
                  <div className="text-xl md:text-2xl font-light text-white">{contribution.year}</div>
                </div>
              </div>
              {index < contributions.length - 1 && <div className="h-px bg-gray-800 mt-16"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
