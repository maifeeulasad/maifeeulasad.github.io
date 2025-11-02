const awards = [
  { name: 'EDU Engineering Day Champion', year: '2020', description: 'Hackathon Winner' },
  { 
    name: 'Campus Ambassador Program 2020', 
    year: '2020', 
    description: 'bdapps - National Appstore of Bangladesh (A concern of Robi Axiata Limited)' 
  },
  { 
    name: 'First Class First Position', 
    year: '2023-25', 
    description: 'M.Sc. in Computer Science & Mathematics (1st & 2nd Semester)' 
  },
];

const Awards = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-2xl font-medium text-black uppercase tracking-wider">AWARDS</h2>
          </div>
          <div className="border-b border-gray-300 pb-4"></div>
        </div>

        <div className="space-y-16">
          {awards.map((award, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-tight">
                    {award.name}
                  </h3>
                  <p className="text-gray-600 text-base mt-2">{award.description}</p>
                </div>
                <div className="text-right ml-8">
                  <div className="text-xl md:text-2xl font-light text-black">{award.year}</div>
                </div>
              </div>
              {index < awards.length - 1 && <div className="h-px bg-gray-200 mt-16"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
