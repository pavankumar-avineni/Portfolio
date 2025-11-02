import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/IMG_20251102_111935.jpg"
              alt="Pavan Kumar A K"
              className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-2xl border-4 border-cyan-500 hover:border-cyan-400 transition-all duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-cyan-500">Pavan Kumar A K</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Computer Science Engineer | Full Stack Developer | Cybersecurity Enthusiast
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about building secure, intelligent applications that solve real-world problems.
            Specialized in AI-powered solutions and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://linkedin.com/in/pavan-kumar-a-k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:pavankumarak.283@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
