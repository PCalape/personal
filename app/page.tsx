import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/profile-picture.png"
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover ml-0.5 object-[center_13%]"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">Philip</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful and
              functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
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
