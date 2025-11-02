import { Code2, Globe, Network, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Programming',
      skills: ['Python', 'C++', 'MySQL'],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Technologies',
      skills: ['React.js', 'Django', 'REST APIs', 'Bootstrap'],
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Networking',
      skills: ['IPv4', 'Subnetting', 'Switching', 'Routing', 'Firewall'],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Tools & Libraries',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Soft Skills',
      skills: ['Problem-solving', 'Teamwork', 'Leadership', 'Adaptability', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & <span className="text-cyan-500">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4 text-cyan-500">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
