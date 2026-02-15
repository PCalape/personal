import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import TwinklingStarsBackground from "../../components/TwinklingStarsBackground";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col relative">
      <TwinklingStarsBackground />
      <Navigation />

      {/* Skills Section */}
      <section className="flex-1 pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              I work with a variety of technologies to build modern, scalable
              applications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
              },
              {
                category: "Backend",
                skills: [
                  "Node.js",
                  "Express",
                  "NestJs",
                  "TypeScript",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                ],
              },
              {
                category: "Tools & Services",
                skills: ["Git", "Docker", "AWS"],
              },
              {
                category: "Other",
                skills: [
                  "REST APIs",
                  "GraphQL",
                  "Testing",
                  "Microservices",
                  "Agile",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="text-center relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg text-sm sm:text-base"
                    >
                      {skill}
                    </div>
                  ))}
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
