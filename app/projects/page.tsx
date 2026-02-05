import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import ShootingStarsBackground from "../../components/ShootingStarsBackground";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col relative">
      <ShootingStarsBackground />
      <Navigation />

      {/* Projects Section */}
      <section className="flex-1 pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Here are some of my featured personal projects that demonstrate my
              full-stack development capabilities. While my projects showcase
              frontend interfaces, they include robust backend architectures and
              server-side solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Wokane Expense Tracker",
                description:
                  "AI powered expense tracker mobile app that helps you manage your finances effortlessly.",
                tech: [
                  "Flutter",
                  "Dart",
                  "NestJs",
                  "TypeScript",
                  "MongoDB",
                  "OpenAI API",
                ],
                demoLink:
                  "https://www.loom.com/share/dc15fcba0fa14e15bece65f9271336ab",
                image: "/wokane.jpg",
                imagePosition: "object-[center_17.5%]",
              },
              {
                title: "PRREM Electrician Board Exam Reviewer",
                description:
                  "A web app that helps prepare for the electrician board exam with practice questions and progress tracking.",
                tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
                image: "/prrem.jpg",
                imagePosition: "object-center scale-110",
                link: "https://prrem.vercel.app/",
              },
              {
                title: "Space Impact",
                description:
                  "A 2D space shooter game where players navigate a spaceship, avoid obstacles, and defeat enemies to achieve high scores.",
                tech: ["HTML", "Canvas"],
                image: "/space-impact.png",
                link: "https://space-impact-jet.vercel.app/",
              },
              {
                title: "Online Gambling Machine",
                description:
                  "A web-based gambling machine game that simulates slot machine gameplay with interactive features and animations.",
                tech: [
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Framer Motion",
                  "MongoDB",
                  "OpenAI API",
                ],
                image: "/slot.png",
                link: "https://online-gambling-ten.vercel.app/",
              },
              {
                title: "PRREM Electrician Board Exam Reviewer",
                description:
                  "A web app that helps prepare for the electrician board exam with practice questions and progress tracking.",
                tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
                image: "/prrem.jpg",
                imagePosition: "object-center scale-110",
                link: "https://prrem.vercel.app/",
              },
              {
                title: "Space Impact",
                description:
                  "A 2D space shooter game where players navigate a spaceship, avoid obstacles, and defeat enemies to achieve high scores.",
                tech: ["HTML", "Canvas"],
                image: "/space-impact.png",
                link: "https://space-impact-jet.vercel.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative z-10"
              >
                <div className="h-36 sm:h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className={`w-full h-full object-cover ${project.imagePosition || "object-center"}`}
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">Project Image</span>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-sm sm:text-base">
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline font-medium"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline font-medium"
                      >
                        Website
                      </a>
                    )}
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
