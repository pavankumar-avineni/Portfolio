import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Madha Institute of Engineering and Technology, Chennai',
      year: '2025',
      grade: 'CGPA: 7.8',
    },
    {
      degree: 'HSC',
      institution: 'Kaligi Ranganathan Montford Matric Hr. Sec School, Chennai',
      year: '2021',
      grade: '82.31%',
    },
    {
      degree: 'SSLC',
      institution: 'Jaigopal Garodia Matric Hr. Sec School, Chennai',
      year: '2019',
      grade: '79%',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-cyan-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-cyan-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Objective</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Motivated and detail-oriented Computer Science Engineering graduate seeking to
                utilize technical and analytical skills in a dynamic environment. Passionate about
                cybersecurity, AI, and full-stack development, with a strong drive to learn, adapt,
                and grow professionally.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-cyan-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Highlights</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">▹</span>
                  <span>Certified Ethical Hacker (CEH v11)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">▹</span>
                  <span>AI-powered Network Threat Detection System</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">▹</span>
                  <span>Full Stack Development Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">▹</span>
                  <span>Strong Problem-Solving & Analytical Skills</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-cyan-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-2 md:mb-0">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-cyan-500 font-semibold">{edu.year}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.grade}</p>
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

export default About;
