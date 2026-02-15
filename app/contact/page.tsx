import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import RadialStarsBackground from "../../components/RadialStarsBackground";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col relative">
      <RadialStarsBackground />
      <Navigation />

      {/* Contact Section */}
      <section className="flex-1 pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gray-900 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s connect!
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="bg-blue-900 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Email
                </h3>
                <p className="text-sm sm:text-base text-gray-300 break-all">
                  philipcalapezz@gmail.com
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Location
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Mandaue City, Philippines
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/philip-john-calape-a88852185/"
                className="bg-gray-700 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
