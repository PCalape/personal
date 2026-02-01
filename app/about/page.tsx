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
              Senior Software Engineer specializing in backend development and
              system architecture with a passion for building scalable
              solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-300">
                With extensive experience in backend development, I specialize
                in building robust server-side applications using Node.js,
                NestJs, Next.js, Typescript, and modern cloud technologies. I
                focus on creating scalable architectures, optimizing server
                performance, and implementing secure APIs that power complex
                applications.
              </p>
              <p className="text-sm sm:text-base text-gray-300">
                I&apos;m passionate about system design, microservices
                architecture, and clean coding. When I&apos;m not coding, you
                can find me researching emerging technologies, viewing tech
                vlogs, or mentoring others.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 sm:p-8 text-center order-first md:order-last">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Quick Stats
              </h3>
              <div className="flex justify-center gap-8 sm:gap-12">
                <div>
                  <div className="text-2xl sm:text-5xl font-bold text-blue-400">
                    4+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-5xl font-bold text-blue-400">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                  Main Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Node.js",
                    "NestJs",
                    "Next.js",
                    "TypeScript",
                    "PostgreSQL",
                    "MongoDB",
                    "AWS",
                    "Docker",
                    "Redis",
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
