const education = [
  {
    id: '01',
    logo: 'https://img.logo.dev/bau.edu.bd?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    degree: 'M.Sc. in Computer Science & Mathematics',
    school: 'Bangladesh Agricultural University',
    activities: 'Research: Semantic Similarity | Supervisor: Dr. Machbah Uddin | Position: First Class First',
    year: '2023-25',
    location: 'Mymensingh, Bangladesh',
  },
  {
    id: '02',
    logo: 'https://img.logo.dev/cu.ac.bd?token=pk_PEzUIRNTScaVBfae7LqPUw&retina=true',
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'University of Chittagong',
    activities: 'Thesis: Utilizing Deep Convolution Neural Network for extracting Urban Environment Component by using Satellite Image Segmentation | Supervisor: N. M. Istiak Chowdhury',
    year: '2017-22',
    location: 'Chittagong, Bangladesh',
  },
];

const Education = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 sm:gap-6 mb-4">
            <h2 className="text-xl sm:text-2xl font-medium text-black uppercase tracking-wider">
              EDUCATION
            </h2>
          </div>
          <div className="border-b border-gray-300 pb-4"></div>
        </div>

        <div className="space-y-16">
          {education.map((edu) => (
            <div key={edu.id} className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start gap-4 md:gap-6">
                <div className="text-gray-500 text-sm font-mono">{edu.id}</div>
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                  <img src={edu.logo} alt={`${edu.school} logo`} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 space-y-3">
                <div className="text-gray-600 text-sm uppercase tracking-wider">{edu.degree}</div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-black leading-tight">
                  {edu.school}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
                <p className="text-gray-600 text-base leading-tight">{edu.activities}</p>
              </div>

              <div className="col-span-12 md:col-span-2 md:text-right">
                <div className="text-black text-xl md:text-2xl font-light">{edu.year}</div>
              </div>

              {edu.id !== '02' && <div className="col-span-12 h-px bg-gray-200 mt-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
