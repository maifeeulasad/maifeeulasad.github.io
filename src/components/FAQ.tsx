import { useState } from 'react';

const faqs = [
  {
    question: 'What motivates you as a developer?',
    answer: 'I love building solutions that matter. Whether it\'s contributing to open-source projects like GitHub Desktop or developing innovative applications, I\'m driven by the impact my work has on the community and ecosystem.',
  },
  {
    question: 'How do you approach learning new technologies?',
    answer: 'I\'m a quick learner who believes in learning by doing. I dive deep into documentation, build projects, and contribute to open-source to understand technologies thoroughly. My GitHub profile shows my continuous learning journey.',
  },
  {
    question: 'What\'s your experience with full-stack development?',
    answer: 'I\'ve worked across the entire stack - from building scalable backends with Python and Node.js to creating responsive frontends with React and TypeScript. I also have experience with ML/AI integration and system automation.',
  },
  {
    question: 'Why should someone hire you?',
    answer: 'I can tell you that I will try my best to get my job done. I am a learner, a quick one, I may add. And my past record speaks for itself - from backend engineer to ML team lead, I\'ve consistently delivered value.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6">
                Ask Me Anything.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                A passionate full-stack engineer and machine learning enthusiast who loves building innovative solutions and contributing to open-source projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="py-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between text-left text-black cursor-pointer"
                  >
                    <span className="text-lg font-medium pr-4">{faq.question}</span>
                    <div className="text-red-500 text-2xl font-bold flex-shrink-0">
                      {openIndex === index ? '−' : '+'}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
