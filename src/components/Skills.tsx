const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'C',
  'React',
  'Node.js',
  'Machine Learning',
  'Full Stack Development',
  'Git & GitHub',
  'System Automation',
  'Arduino',
  'API Development',
  'Database Design',
];

const Skills = () => {
  return (
    <div className="bg-black py-16 overflow-hidden w-screen relative left-1/2 right-1/2 -mx-[50vw]">
      <div className="relative">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="px-12 py-6 rounded-full border border-gray-500/40 text-white whitespace-nowrap hover:border-white transition-colors duration-300 cursor-pointer flex-shrink-0 text-2xl md:text-3xl lg:text-4xl font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
