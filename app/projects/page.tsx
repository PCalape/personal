import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* Projects Section */}
      <section className="pt-24 pb-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce solution built with Next.js, Stripe, and MongoDB.",
                tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
                image: "/api/placeholder/400/250",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management application with real-time updates.",
                tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
                image: "/api/placeholder/400/250",
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website built with modern web technologies.",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
                image: "/api/placeholder/400/250",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="text-blue-400 hover:underline font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:underline font-medium"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
