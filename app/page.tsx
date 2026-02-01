import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StarsBackground from "../components/StarsBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 relative flex flex-col">
      <StarsBackground />
      <Navigation />
      <section
        id="home"
        className="flex-1 flex items-center justify-center pt-20 pb-8 sm:pb-16 bg-gradient-to-br from-gray-900/80 to-gray-800/80 relative z-10 min-h-[calc(100vh-5rem)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center py-8 sm:py-12 lg:py-20">
            <div className="mb-6 sm:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/profile-picture.png"
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover ml-0.5 object-[center_13%]"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Hi, I&apos;m <span className="text-blue-400">Philip</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Full Stack Developer passionate about creating beautiful and
              functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-center"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
