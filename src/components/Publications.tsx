const publications = [
  {
    name: 'Semantic Similarity Research',
    journal: 'M.Sc. Thesis - Bangladesh Agricultural University',
    authors: 'Maifee Ul Asad',
    year: '2025',
    link: '#',
    status: 'Awaiting submission',
  },
  {
    name: 'Utilizing Deep Convolution Neural Network for extracting Urban Environment Component by using Satellite Image Segmentation',
    journal: 'B.Sc. Thesis - University of Chittagong',
    authors: 'Maifee Ul Asad',
    year: '2022',
    link: '#',
    status: 'Completed',
  },
];

const Publications = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-2xl font-medium text-white uppercase tracking-wider">PUBLICATIONS</h2>
          </div>
          <div className="border-b border-gray-600 pb-4"></div>
        </div>

        <div className="space-y-16">
          {publications.map((pub, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight hover:text-gray-300 transition-colors cursor-pointer block"
                  >
                    {pub.name}
                  </a>
                  <p className="text-gray-400 text-base mt-1 leading-tight">
                    {pub.journal} • {pub.authors}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{pub.status}</p>
                </div>
                <div className="text-right ml-8">
                  <div className="text-xl md:text-2xl font-light text-white">{pub.year}</div>
                </div>
              </div>
              {index < publications.length - 1 && <div className="h-px bg-gray-800 mt-16"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
