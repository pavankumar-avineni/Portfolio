import { Award, Shield, FileText, Code } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Certified Ethical Hacker (CEH v11)',
      issuer: 'EC-Council',
      year: '2023',
      color: 'from-red-500 to-orange-600',
      description: 'Advanced certification in ethical hacking and cybersecurity practices',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Microsoft Office Advanced',
      issuer: 'Microsoft',
      year: '2022',
      color: 'from-blue-500 to-cyan-600',
      description: 'Proficiency in Microsoft Office Suite and productivity tools',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Python Full Stack Development',
      issuer: 'Training Institute',
      year: '2025',
      color: 'from-green-500 to-teal-600',
      description: 'Comprehensive training in Python-based full-stack web development',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & <span className="text-cyan-500">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg mx-auto`}
                >
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {cert.title}
                </h3>
                <p className="text-cyan-500 font-semibold mb-2 text-center">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-center">
                  {cert.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg">
              <Award className="w-6 h-6" />
              <span className="font-semibold">
                Continuously learning and expanding expertise in emerging technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
