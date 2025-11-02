import { Briefcase, Code, Smartphone, TrendingUp } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      icon: <Code className="w-8 h-8" />,
      role: 'Full Stack Developer',
      company: 'AK Infopark',
      location: 'Nagercoil',
      description:
        'Developed and maintained full-stack web applications using modern technologies. Worked on both frontend and backend development, implementing responsive designs and robust API integrations.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      role: 'Android App Developer',
      company: 'NSIC',
      location: '',
      description:
        'Gained hands-on experience in Android application development. Worked on mobile app features, UI/UX implementation, and integrated various Android APIs and services.',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      role: 'Marketing Development',
      company: 'EZE Solutions',
      location: '',
      description:
        'Contributed to marketing strategies and business development initiatives. Analyzed market trends, customer engagement, and assisted in digital marketing campaigns.',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional <span className="text-cyan-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500"></div>

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-500 rounded-full items-center justify-center shadow-lg z-10">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="md:w-1/2"></div>

                  <div className="md:w-1/2">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${internship.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}
                      >
                        {internship.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {internship.role}
                      </h3>
                      <p className="text-cyan-500 font-semibold mb-3">
                        {internship.company}
                        {internship.location && ` • ${internship.location}`}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {internship.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
