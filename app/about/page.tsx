import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* About Section */}
      <section className="pt-24 pb-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m a passionate developer with a love for creating
              innovative solutions and beautiful user experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With several years of experience in web development, I
                specialize in modern technologies like React, Next.js,
                TypeScript, and Node.js. I enjoy solving complex problems and
                turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open source projects, or enjoying
                the great outdoors.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    3+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    20+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    10+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Technologies
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    100%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
