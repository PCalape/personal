import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navigation />

      {/* About Section */}
      <section className="flex-1 pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              I&apos;m a passionate developer with a love for creating
              innovative solutions and beautiful user experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-300">
                With several years of experience in web development, I
                specialize in modern technologies like React, Next.js,
                TypeScript, and Node.js. I enjoy solving complex problems and
                turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-sm sm:text-base text-gray-300">
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
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 sm:p-8 text-center order-first md:order-last">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">
                    20+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Technologies
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
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
